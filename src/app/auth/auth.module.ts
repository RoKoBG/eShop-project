import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthRoutingModule } from './auth-routing.module';
import {FormsModule} from '@angular/forms';
import { UpdateProfileComponent } from './update-profile/update-profile.component'

@NgModule({
  declarations: [LoginComponent,RegisterComponent,ProfileComponent, UpdateProfileComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
  ]
})
export class AuthModule { 
  
}
