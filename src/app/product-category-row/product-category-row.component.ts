import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../services/productService';

@Component({
  selector: 'app-product-category-row',
  templateUrl: './product-category-row.component.html',
  styleUrls: ['./product-category-row.component.css']
})
export class ProductCategoryRowComponent implements OnInit,OnChanges {

products!:Product[];
@Input()
category!:string;
@Input()
searchValue!:string;
@Input()
instock!:boolean;
  constructor(public ps:ProductService) {

   }

  ngOnInit(): void {
    //let products = fetch all products for each category and send it to row compoenet
    let categorySpecificProducts = this.ps.getProducts().filter(v=>v.category.toLowerCase()==this.category.toLowerCase());
    this.products=categorySpecificProducts;
  }
  ngOnChanges()
  {
    if(this.searchValue !== " ")
    {
      if(this.instock)
      {
        this.products=this.ps.getProducts().filter(v=>v.category.toLowerCase()==this.category.toLowerCase() 
        && v.name.toLowerCase().includes(this.searchValue.toLowerCase()) && v.stock==this.instock);
      }
      else{
        this.products=this.ps.getProducts().filter(v=>v.category.toLowerCase()==this.category.toLowerCase() && 
        v.name.toLowerCase().includes(this.searchValue.toLowerCase()));
      }
      
    }

    else{
      if(this.instock)
      {
        
        this.products=this.ps.getProducts().filter(v=>v.category.toLowerCase()==this.category.toLowerCase()
        && v.stock==this.instock);
      } 
      else{
        let categorySpecificProducts = this.ps.getProducts().filter(v=>v.category.toLowerCase()==this.category.toLowerCase());
        this.products=categorySpecificProducts;
      }     
    }
  }

}
