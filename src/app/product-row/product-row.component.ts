import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../services/productService';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

   productName!:string;
   productPrice!:string;
   productCategory!:string;
   @Input()
  product!:Product;

  constructor(private ps:ProductService) { 
    
  }

  ngOnInit(): void {
    this.productName=this.product.name;
    this.productPrice=this.product.price;
  }

}
