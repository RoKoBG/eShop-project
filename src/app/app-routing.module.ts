import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductsComponent } from './products/products.component';
import { AddComponent } from './products/add/add.component';
import { DetailsComponent } from './products/details/details.component';
import { EditComponent } from './products/edit/edit.component';
import { AdmGuard } from './auth/adm.guard';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent, 
  },
  {
    path: 'products/add',
    canActivate: [AuthGuard, AdmGuard], 
    component: AddComponent, 
  },
  {
    path: 'products/details/:id',
    canActivate: [AuthGuard],
    component: DetailsComponent,
  },
  {
    path: 'products/edit/:id',
    canActivate: [AuthGuard, AdmGuard],
    component: EditComponent
  },
  {
    path: 'cart',
    canActivate: [AuthGuard],
    component: CartComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
