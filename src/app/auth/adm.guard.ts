import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,RouterStateSnapshot,Router,UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import {Observable} from 'rxjs';
import { getAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AdmGuard{
  constructor(public authService: AuthService,public router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,

  ):Observable<boolean> | Promise<boolean> | UrlTree | boolean{
    if(getAuth().currentUser?.email !== 'rosen.koichev@gmail.com'){this.router.navigate(['/home'])}
    return true;
  }
}