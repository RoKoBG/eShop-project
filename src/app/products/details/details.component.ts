import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Product } from '../product';

const cartItems: Product[] = [];

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  prodInfo: any;
  user: any;
  constructor(
    private prodService: ProductsService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.prodService.currProdInfo.subscribe(
      prodInfo => this.prodInfo = prodInfo
    );
 
    this.authService.getUserState().subscribe((user) => {
      this.user = user;
    });
    // Get id from URL
    const prodID = this.route.snapshot.paramMap.get('id');
  }
  newProdInfo(prodInfo: any) {
    this.prodService.change(prodInfo);
  }
  
  addCart(prodInfo: Product) {
    if (!this.user) {
      this.router.navigate(['/register']);
    } else {
      this.prodService.change(prodInfo);
      cartItems.push(prodInfo);
      sessionStorage.setItem('CartItems', JSON.stringify(cartItems));
    }
  }
  delete(product: Product) {
    this.prodService.delete(product);
  }
}
