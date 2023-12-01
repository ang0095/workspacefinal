import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { LoginService } from '../capstoneservice/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: LoginService, private router: Router) {

  }
  role = localStorage.getItem("keyRole");
  

  canActivate(): boolean {
    if (this.auth.isLoggedIn() && this.role == "Admin") {
      console.log("Hi:"+this.role);
      localStorage.removeItem("keyRole");
      return true;
  }
    else {
      alert("PLease Login First")
      this.router.navigate(['login'])
      return false;
    }

  }

}
