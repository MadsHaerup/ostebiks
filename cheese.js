let url = new URLSearchParams(window.location.search);
var singleCheese = document.querySelector('.singleCheese');
if (url.has('id')) {
	console.log(url.get('id'));
	fetch(`https://oste-api.herokuapp.com/api/v1/cheeses/${url.get('id')}`)
		.then(res => res.json())
		.then(function (data) {
			console.log(data);

			if (url.get('id') == data._id) {
				var name = document.createElement('li');
				name.setAttribute('class', 'name');
				name.innerText = 'Name: ' + data.name;
				// • • • • •
				var weight = document.createElement('li');
				weight.setAttribute('class', 'weight');
				weight.innerText = 'Weight: ' + data.weight + ' gram';
				// • • • • •
				var strength = document.createElement('li');
				strength.setAttribute('class', 'strength');
				strength.innerText = 'Strength: ' + data.strength;
				// • • • • •
				var brand = document.createElement('li');
				brand.setAttribute('class', 'brand');
				brand.innerText = 'Brand: ' + data.brand;
				// • • • • •
				var price = document.createElement('li');
				price.setAttribute('class', 'price');
				price.innerText = 'Price: ' + data.price.$numberDecimal + ' Kr';

				singleCheese.appendChild(name);
				singleCheese.appendChild(weight);
				singleCheese.appendChild(brand);
				singleCheese.appendChild(price);
				singleCheese.appendChild(strength);
			}
		});
}
