let url = new URLSearchParams(window.location.search);
//offset skal være = det her hvis linket findes : eller 0
let offset = url.get('offset') ? url.get('offset') : 0;
let prevPage, nextPage;
let nextLink = document.querySelector('.link.next');
let prevLink = document.querySelector('.link.prev');

// ────────────────────────────────────────────────────────────────────────────────

fetch(`https://oste-api.herokuapp.com/api/v1/cheeses?offset=${offset}`)
	//omformatere til Json
	.then(res => res.json())
	//griber data'en og gør noget ved den
	.then(function (data) {
		console.log(data);
		//runder op til det næste hele tal
		//dividere objekterne med antal pr side
		let pages = Math.ceil(data.count / 5);
		console.log('totaltpages = ' + pages);

		//bladre frem og tilbage i api'et
		nextPage = offset >= pages ? 10 : parseInt(offset) + 5;
		prevPage = offset <= 0 ? 0 : parseInt(offset) - 5;
		//fortæller at linket i html skal bladre
		nextLink.href = `?offset=${nextPage}`;
		prevLink.href = `?offset=${prevPage}`;

		// ────────────────────────────────────────────────────────────────────────────────

		//refere til vores template
		let template = document.querySelector('#template');
		//referere til det sted vi ligger dataen ind i
		let cheeses = document.querySelector('.cheeses');
		//array'et hedder results
		data.results.forEach(function (result) {
			var id = result._id;

			var queryUrl = `/offset=${offset}`;
			url = queryUrl.split('/')[0] + `/cheese-sheet.html?id=${id}`;

			//kloner hvert data objekt
			let clone = template.content.cloneNode(true);
			//får fat i elementet data'en skal puttes ind i
			clone.querySelector('.cheese').innerText = result.name;
			clone.querySelector('.cheese').href = url;

			//Tager fat i elementet og putter klonen ind i den
			cheeses.appendChild(clone);
		});
	});

// ────────────────────────────────────────────────────────────────────────────────
var currentPage;
if (url.get('offset') == 0 || url == '') {
	currentPage = 1;
} else if (url.get('offset') == 5) {
	currentPage = 2;
}
if (url.get('offset') == 10) {
	currentPage = 3;
}
console.log(currentPage);

document.querySelector('.currentPage').innerHTML = currentPage;
