var Promise = require('bluebird');

var calculateTip = function(total, tip_percent) {
	tip_percent = tip_percent || .25;

	var tip = total * tip_percent;
	return total + tip;
}

var farenheitToCelsius = function (temp) {
	return (temp-32)/1.8;
}

var celsiusToFarenheit = function (temp) {
	return (temp * 1.8) + 32;
}

var add = function (a, b) {
	return new Promise(function (resolve, reject){
		setTimeout(function (){
			if (a<0 || b<0) {
				return reject('Both numbers must be non-negative');
			}

			return resolve(a + b);
		}, 2000);
	});
}

module.exports = {
	calculateTip: calculateTip,
	farenheitToCelsius: farenheitToCelsius,
	celsiusToFarenheit: celsiusToFarenheit,
	add: add
}
