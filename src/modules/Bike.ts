export class Bike{
    constructor(private brand:string){}

    public getBrand(){
        return this.brand;
    }

    public setBrand(newBrandName:string){
        this.brand = newBrandName;
    }
};