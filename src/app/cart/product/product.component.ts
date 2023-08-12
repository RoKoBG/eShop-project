import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product!: Product;
  constructor(){}
  ngOnInit(): void {
    
  }
}
