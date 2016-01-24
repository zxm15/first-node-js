var Car = function(carType) {
	this.carType = carType;
	this.carName = 'BMW';
}

var myCar = new Car('passenger');
Car.prototype.horn = function() {
	// body...
	console.log('hoho');
};

console.log(myCar.carType);
console.log(myCar.carName);
myCar.horn();