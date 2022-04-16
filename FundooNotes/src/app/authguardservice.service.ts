import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService {

  constructor() { }
  isLogin(){  
    return !!localStorage.getItem("token");  
    }  
}
