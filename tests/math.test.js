var math = require('../src/math');

test('Hello World!', function() {
});

test('Should calculate total with tip', function() {
	var total = math.calculateTip(10, .3);

	/*
	if (total != 13) {
		throw new Error('Total tip should be 13. Got ' + total);
	}
	*/

	expect(total).toBe(13);
});


test('Should calculate total with default tip', function () {
	var total = math.calculateTip(10);

	expect(total).toBe(12.5);
});


test('Should test celsius to farenheit temperature conversion', function () {
	var farenheit = math.celsiusToFarenheit(50);

	expect(farenheit).toBe(122);
});


test('Should test farenheit to celsius temperature conversion', function () {
	var celsius = math.farenheitToCelsius(122);

	expect(celsius).toBe(50);
});

test('Async test demo', function (){
	setTimeout(function(){
		expect(1).toBe(2);
	}, 5000);
});

