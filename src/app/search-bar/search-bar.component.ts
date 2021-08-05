import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productService';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

searchValue:string;
checkBoxStatus:boolean;
  constructor(public ps:ProductService) {
    this.searchValue=" ";
    this.checkBoxStatus=false;
     }

  ngOnInit(): void {
  }

}
