let url = new URLSearchParams(window.location.search);
var singleCheese = document.querySelector('.singleCheese');
if (url.has('id')) {
	console.log(url.get('id'));
	fetch(`https://oste-api.herokuapp.com/api/v1/cheeses`)
		.then(res => res.json())
		.then(function (data) {
			console.log(data);
			data.results.forEach(function (result) {
				if (url.get('id') == result._id) {
					var name = document.createElement('li');
					name.setAttribute('class', 'name');
					name.innerText = 'Name: ' + result.name;
					// • • • • •
					var weight = document.createElement('li');
					weight.setAttribute('class', 'weight');
					weight.innerText = 'Weight: ' + result.weight + ' gram';
					// • • • • •
					var strength = document.createElement('li');
					strength.setAttribute('class', 'strength');
					strength.innerText = 'Strength: ' + result.strength;
					// • • • • •
					var brand = document.createElement('li');
					brand.setAttribute('class', 'brand');
					brand.innerText = 'Brand: ' + result.brand;
					// • • • • •
					var price = document.createElement('li');
					price.setAttribute('class', 'price');
					price.innerText = 'Price: ' + result.price.$numberDecimal + ' Kr';

					singleCheese.appendChild(name);
					singleCheese.appendChild(weight);
					singleCheese.appendChild(brand);
					singleCheese.appendChild(price);
					singleCheese.appendChild(strength);
				}
			});
		});
}
