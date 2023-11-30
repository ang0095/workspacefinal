import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator, FormBuilder, ReactiveFormsModule, Validators,RequiredValidator } from '@angular/forms';
import {FormArray, FormControl, FormGroup, Validator} from '@angular/forms';
import { LoginService } from '../capstoneservice/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  logins:any;
  constructor(private fb:FormBuilder, private http:LoginService, private r:Router) 
  { 
    this.loginForm = this.fb.group({
      email:['',Validators.email],
      password:['',Validators.required]

    })
  }

  
  onLogin()
  {
    // this.http.getCourses()
    // .subscribe(r => this.logins=r);
    // console.log("success");
    
    if(this.loginForm.valid)
    {
      //redirect to courses page(get courses)
      console.log("success")
      this.http.login(this.loginForm.value)
      .subscribe({
        next:(res =>{
          alert(res.message)
          this.loginForm.reset();

          console.log(this.loginForm.value);
          
          this.http.storeToken(res.token);
          this.r.navigate(['dashboard']);
          //redirect to dashboard
        }),
        error:(err =>{
          alert(err?.error.message)
        })    
      })
    }
    else 
    {
      //throw exception
      console.log("oops something went wrong")
    }


  }

  ngOnInit(): void {


  }

}

