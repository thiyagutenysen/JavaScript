// best method for exporting
const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeClass {
	constructor() {
		console.log('constructor is called');
	}
}

module.exports = {
	sum: sum,
	PI: PI,
	SomeClass: SomeClass,
};
