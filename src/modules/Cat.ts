export class Cat {
    name:string;
    color:string;
    age:number;
    constructor(name:string, color:string, age:number) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
toString(){
    return "My name is " + this.name + " and my fur is " + this.color + " and I am " + this.age + " years old";
}
}
