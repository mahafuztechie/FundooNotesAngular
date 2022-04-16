import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardserviceService } from './authguardservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthguardserviceService, private router: Router) {}  
  canActivate(): boolean {  
    if (!this.Authguardservice.isLogin()) {  
      this.router.navigateByUrl('/login')
    } 
     return this.Authguardservice.isLogin();
}  
  
}
