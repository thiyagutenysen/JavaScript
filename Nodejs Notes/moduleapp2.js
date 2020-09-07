// this is second way of importing but not that good
// too much verbose
const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeClass {
	constructor() {
		console.log('constructor is called');
	}
}

module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeClass = SomeClass;
