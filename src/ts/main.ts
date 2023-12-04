import { Bike } from '../modules/Bike';
import { Cat } from '../modules/Cat';
import './../scss/style.scss'

const name: string = "Andreas";
const surname: string = "Retzius";
let age: number = 23;

//This would not work since typescript is hardtyped, dynamically changing datatype does not work.
//age = "23"; age is a number, not a string.
//with vitepluginchecker it wont even compile with syntax errors.

function stringBuilder(): string {
    return "My name is " + name + " " + surname + " and I'm " + age + " years old.";
}

console.log(stringBuilder());

const cat1: Cat = new Cat("Meow", "Black", 10);

console.log(cat1.toString());

const catList: Cat[] = [cat1, new Cat("Miew", "White", 5)];

console.log(catList);

for (let i = 0; i < catList.length; i++) {
    console.log(catList[i].toString());
}

const bike1: Bike = new Bike("Yoshemite");

console.log(bike1.getBrand());