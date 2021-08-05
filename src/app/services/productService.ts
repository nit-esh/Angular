import { Injectable } from "@angular/core";
import { Product } from "../model/product.model";
@Injectable({
    providedIn:"root"
})
export class ProductService{
    productList:Array<Product>;
    constructor(){
        this.productList=[
            {category:'Sporting Goods',price:'$49.99',stock:true,name:'Football'},
            {category: 'Sporting Goods', price: '$9.99', stock: false, name: 'Baseball'},
            {category: 'Sporting Goods', price: '$29.99', stock: false, name: 'Basketball'},
            {category: 'Electronics', price: '$99.99', stock: true, name: 'iPod Touch'},
            {category: 'Electronics', price: '$399.99', stock: false, name: 'iPhone 5'},
            {category: 'Electronics', price: '$199.99', stock: true, name: 'Nexus 7'}
        ];
    }


    getProducts():Array<Product>
    {
        return this.productList;
    }
    getCategories():Set<string>
    {
        let categories:Set<string>=new Set();
        this.productList.forEach(v=>categories.add(v.category))
        return categories;
    }
}
