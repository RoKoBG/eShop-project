import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Router } from '@angular/router';
import { Product } from '../products/product';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Array<any> = [];
  quantityForBuy: number = 1;
  cartItems: any;
  product!: Product;
  constructor(private prodService: ProductsService, private router: Router, private forms:FormsModule) {}
  ngOnInit(): void {
    this.cartItems = sessionStorage.getItem('CartItems');
    this.products = JSON.parse(this.cartItems);
  }

  buy(quantityForBuy: number, products: Array<any>) {
    if (!products) {
      alert();
    }
    products.forEach((product) => {
      product.quantity -= quantityForBuy;
      this.prodService.editProduct(product);
      sessionStorage.removeItem('CartItems');
    });
  }
  removeItems() {
    let isConfirmed = confirm(
      'Are you sure you want to remove items from Cart?'
    );
    if (isConfirmed) {
      sessionStorage.removeItem('CartItems');
      this.router.navigate(['/products']);
    }
  }
}
