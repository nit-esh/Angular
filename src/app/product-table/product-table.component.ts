import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../services/productService';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

products!:Product[]
categories!:Set<string>;
@Input()
instock!:boolean
@Input()
searchValue!:string
  constructor(public ps:ProductService) { 
    this.products=this.ps.getProducts(); 
    this.categories=this.ps.getCategories();
    console.log(this.categories.values())  
  }

  ngOnInit(): void {
       
  }

}
