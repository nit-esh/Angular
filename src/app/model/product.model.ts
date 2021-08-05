export class Product{
 category:string;
 price:string;
 stock!:boolean;
 name:string;
constructor(){
    
    this.category="Unknown";
    this.price="Unknown";
    this.name="Unknown";
}
// public get Name(){
    
//     return this.name;
// }
// public set Name(name: string)
// {
//     this.name=name;
// }
// public get Category(){
    
//     return this.category;
// }
// public set Category(category: string)
// {
//     this.category=category;
// }
// public get Price(){
    
//     return this.price;
// }
// public set Price(price: string)
// {
//     this.price=price;
// }
// public get Stock(){
    
//     return this.stock;
// }
// public set Stock(stock: boolean)
// {
//     this.stock=stock;
// }
}