import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {

  prodInfo: any;

  constructor(private prodService: ProductsService) {}

  ngOnInit(): void {

    this.prodService.currProdInfo.subscribe(
      prodInfo => this.prodInfo = prodInfo
    );

  }

  editProd(prodInfo:any) {
    this.prodService.editProduct(this.prodInfo);
  }
}
