import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../capstoneservice/login.service';


@Injectable({
  providedIn: 'root'
})
export class OthGuard implements CanActivate {
 
  constructor(private auth:LoginService, private router:Router)
    {
 
    }
 
    role = localStorage.getItem("keyRole");
 
  canActivate():boolean{
   
    if(this.auth.isLoggedIn() && this.role == "Student")
    {
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


/*
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class OthGuard implements CanActivate {
 
  constructor(private auth:AuthService, private router:Router)
    {
 
    }
 
    role = localStorage.getItem("keyRole");
 
  canActivate():boolean{
   
    if(this.auth.isLoggedIn() && this.role == "Organizer")
    {
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





*/