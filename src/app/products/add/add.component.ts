import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { Product } from '../product';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {

  product: Product ={
name :'',
category:'',
description:'',
imageUrl:'',
quantity:undefined,
price: undefined,

  }
   user = JSON.parse(localStorage.getItem('user')!);
  constructor(private prodService: ProductsService,private authService: AuthService, private router:Router) {}

  ngOnInit(): void {}
  submit(){
    if(this.product.name != '' && this.product.description !=''){
      this.prodService.addProd(this.product);
    }
  }
}
