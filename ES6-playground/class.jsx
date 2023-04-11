// This is ES7 - Next Generation - modern syntax
class Animal {
	isAlive = true;
	printStatus = () => {
		console.log("alive = ", this.isAlive);
	}
}

export class Cat extends Animal { // notice there is no need for super() call.
	name = "Tom"; 
	printName = () => {
		console.log("The cat's name is ", this.name)
	}
}




// This is ES6 version 
class Car {
	constructor() {
		this.producer = 'Volvo';
	}

	printProducer() {
		console.log(this.producer);
	}
}

export class Truck extends Car {
	constructor() {
		super();
		this.maxLoad = 20;	
	}	
	
	printMaxLoad() {
		console.log(this.maxLoad);
	}
}

