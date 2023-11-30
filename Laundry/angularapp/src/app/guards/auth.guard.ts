import { Injectable } from '@angular/core';
import { CanActivate, Router,} from '@angular/router';
import { LoginService } from '../capstoneservice/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private http:LoginService,private router:Router)
  {

  }
  canActivate():boolean
  {
    if(this.http.isLoggedIn())
    {
      return true;
    }
    else{
      alert("PLease Login First")
      this.router.navigate(['login'])
      return false;
    }

  }
  
}
