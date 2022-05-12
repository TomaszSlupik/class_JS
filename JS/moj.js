// KONSTRUKTORY I KLASY
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.showName = function () {
	console.log(`Cześć mam na imię ${this.name}.`);
};
Person.prototype.showAge = function () {
	console.log(`Mam ${this.age} lat.`);
};

const personOne = new Person("Jan", 28);

personOne.showName();
personOne.showAge();

class PersonTwo {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	showNameTwo() {
		console.log(`Cześć mam na imię ${this.name}.`);
	}

	showAgeTwo() {
		console.log(`Mam ${this.age} lat.`);
	}
}

const person2 = new PersonTwo("Justyna", 33);

person2.showNameTwo();
person2.showAgeTwo();

// Przykład drugi
function Movie(name, duration, cinema) {
	this.name = name;
	this.duration = duration;
	this.cinema = cinema;
}

Movie.prototype.nameMovie = function () {
	console.log(`Dziś pójdziemy na ${this.name}.`);
};

Movie.prototype.durationMovie = function () {
	console.log(`Film będzie trwać ${this.duration} minut.`);
};

Movie.prototype.cinemaMovie = function () {
	console.log(`Kino jest w ${this.cinema}.`);
};

const movieOne = new Movie("Spiderman", 180, "Warszawie");
movieOne.nameMovie();
movieOne.durationMovie();
movieOne.cinemaMovie();

class MovieTwo {
	constructor(name_movie, duration_movie, cinema_movie) {
		this.name_movie = name_movie;
		this.duration_movie = duration_movie;
		this.cinema_movie = cinema_movie;
	}
	name_movie_show() {
		console.log(`Dziś pójdziemy na ${this.name_movie}.`);
	}
	duration_movie_show() {
		console.log(`Film będzie trwać ${this.duration_movie} minut.`);
	}
	cinema_movie_show() {
		console.log(`Kino jest w ${this.cinema_movie}.`);
	}
}

const movieTwo = new MovieTwo("Batman", 150, "Rzeszowie");
movieTwo.name_movie_show();
movieTwo.duration_movie_show();
movieTwo.cinema_movie_show();

// Dziedziczenie

class Dog {
	constructor(name_dog) {
		this.name_dog = name_dog;
	}
	dog_walk() {
		console.log(`${this.name_dog} idzie dziś na spacer`);
	}
}

class DogAge extends Dog {
	constructor(name_dog, age_dog) {
		super(name_dog);
		this.age_dog = age_dog;
	}
}

const dogOne = new DogAge("Reks", 4);

console.log(dogOne);
dogOne.dog_walk();

// Przykład 2
class Training {
	constructor(name_training) {
		this.name_training = name_training;
	}
}

class Buty extends Training {
	constructor(name_training, buts) {
		super(name_training);
		this.buts = buts;
	}
	run() {
		console.log(`${this.name_training} - dzisiaj będę biegał w ${this.buts}`);
	}
}

const firstTrain = new Buty("bieganie", "Nike AlphaFly");

firstTrain.run();

//ASSIGN
const dishOne = {
	name_dish: "pierogi",
	weight: 400,
};

const dishTwo = {
	name_dish: "pizza",
	weight: 300,
};

const dishInfo = Object.assign({}, dishOne, dishTwo);
console.log(dishOne);
console.log(dishTwo);
console.log(dishInfo);

const dishOneCopy = Object.assign({}, dishOne);
dishOneCopy.name_dish = "pierogi z truskawkami";
console.log(dishOneCopy);

// Destrukturyzacja obiektów
const coffee = {
	name_coffe: "COSTA",
	price: 10,
	size: "duża",
};

const showInfo = () => {
	const name_coffe = coffee.name_coffe;
	const price = coffee.price;
	const size = coffee.size;

	console.log(
		`Dzisiaj będę pił kawę ${name_coffe}, cena tej kawy kosztuje ${price} zł i jest ${size}.`
	);
};

showInfo();

const coffeeTwo = {
	name_coffe: "STARBUCKS®",
	price: 8,
	size: "duża",
};

const showInfoTwo = () => {
	const { name_coffe, price, size: sizeCoffe } = coffeeTwo;

	console.log(
		`Dzisiaj będę pił kawę ${name_coffe}, cena tej kawy kosztuje ${price} zł i jest ${sizeCoffe}.`
	);
};

showInfoTwo();

// Kolejny przykład destrukturyzacji
const personHasCar = {
	first_name: "Piotr",
	age: 23,
	city: "Warszawa",
	car: {
		brand: "Audi",
		model: `q7`,
	},
};

const showInfoPersonCar = ({ car: { brand, model } }) => {
	console.log(`${brand} ${model}`);
};

showInfoPersonCar(personHasCar);

// Destrukturyzacja na tablicach

const numbers = ["one", "two", "three", "four", "five"];

const firstNum = numbers[0];
const secNum = numbers[1];
console.log(firstNum, secNum);

const [first, second] = numbers;
console.log(first, second);

const thirdNum = numbers[2];
const fourthNum = numbers[3];
console.log(thirdNum, fourthNum);

const [, , third, fourth] = numbers;
console.log(third, fourth);
