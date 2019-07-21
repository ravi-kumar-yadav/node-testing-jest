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

module.exports = {
	calculateTip: calculateTip,
	farenheitToCelsius: farenheitToCelsius,
	celsiusToFarenheit: celsiusToFarenheit
}
