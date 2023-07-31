import { Component } from '@angular/core';
import { getAuth, updateProfile } from 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent {
  displayname : string ='';
  photo: string = '';
  constructor(private userService: AuthService) {}
  user: any = JSON.parse(localStorage.getItem('user')!);

 
}
