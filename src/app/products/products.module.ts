import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [AddComponent, ProductsComponent, DetailsComponent, EditComponent, ProductComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [AddComponent,ProductsComponent]
})
export class ProductsModule { }
