var square = (x) => x*x;

var user = {
	name: 'Andrew',
	sayHi: () => {
		 console.log(arguments);
		 console.log(`Hi. I'm ${this.name}`);
	},
	sayHiAlt () {
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	}
};

console.log(square(9));

user.sayHi(1,2,3);