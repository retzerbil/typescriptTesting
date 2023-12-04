import { Cat } from '../modules/Cat';
import './../scss/style.scss'

const name:string="Andreas";
const surname:string="Retzius";
const age:number=23;

//This would not work since typescript is hardtyped, dynamically changing datatype does not work.
//age = "23"; age is a number, not a string.

function stringBuilder():string{
return"My name is " +name+ " " + surname + " and I'm " + age + " years old.";
}

console.log(stringBuilder());

const cat1:Cat = new Cat("Meow","Black",10);

console.log(cat1.toString());

const catList:Cat[] = [cat1, new Cat("Miew", "White", 5)];

console.log(catList);