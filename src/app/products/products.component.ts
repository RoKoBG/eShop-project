import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Product } from './product';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>
  prodInfo:any

 constructor(private prodService: ProductsService, private authService: AuthService, private router:Router) {}
  ngOnInit(): void {
    this.products$ = this.prodService.getAll();
  }
  prodDetails(prodInfo: any){
  return this.prodService.change(prodInfo);
  }
  


}
