import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../capstoneservice/login.service';


@Injectable({
  providedIn: 'root'
})
export class AOthGuard implements CanActivate {
 
  constructor(private auth:LoginService, private router:Router)
    {
 
    }
 
    role = localStorage.getItem("keyRole");
 
  canActivate():boolean{
   
    if(this.auth.isLoggedIn() && this.role == "OfficeStaff")
    {
        localStorage.removeItem("keyRole");
      return true;
    }
   
    else
    {
      alert("Error occured! Please try again.");
      this.router.navigate(['login']);
      return false;
    }
   
  }
 
}