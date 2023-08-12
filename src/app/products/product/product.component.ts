import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
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
