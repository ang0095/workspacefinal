import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator, FormBuilder, ReactiveFormsModule, Validators,RequiredValidator } from '@angular/forms';
import {FormArray, FormControl, FormGroup, Validator} from '@angular/forms';
import { LoginService } from '../capstoneservice/login.service';
import { Router } from '@angular/router';
import { User } from '../capmodels/user';
// import { ToastrService } from 'ngx-toastr';
// import { NgToastService } from 'ng-angular-popup';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  logins:any;           // holds data retrived from thr server

  uname:any;            // holds the username

  constructor(private fb:FormBuilder, private http:LoginService, private r:Router) 
  { 
    this.loginForm = this.fb.group({
      email:['',[Validators.required,this.emailValidator]],
      password:['',Validators.required]

    })
  }

  emailValidator(control)
  {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailPattern.test(control.value) ? null:{invalidEmail :true};
    
  }
  
  
  onLogin()
  {
    // this.http.getCourses()
    // .subscribe(r => this.logins=r);
    // console.log("success");
    
    if(this.loginForm.valid)
    {
      let roleValue:any;
      //redirect to courses page(get courses)
      console.log("success")

      this.http.getUserObj(this.loginForm.value.email)     // calls method from service to retrieve user info...
      .subscribe(
        res=>{
          roleValue=res.role;
          console.log("role1:"+roleValue)
        },
        err=>
        {
          roleValue=err;
         // console.log("err1:"+roleValue)
        }
      )

      //////////////////////////// changes 
      // let userValue:any;
      // this.http.getUserObj(this.loginForm.value.email)     // calls method from service to retrieve user name...
      // .subscribe(
      //   res=>{
      //     userValue=res.username;
      //     console.log("username1:"+roleValue)
      //   },
      //   err=>
      //   {
      //     roleValue=err;
      //    // console.log("err1:"+roleValue)
      //   }
      // )

        let usernameValue:any;
      this.http.getUserObj(this.loginForm.value.email)
      .subscribe(
        res=>{
          usernameValue = res.username;
        },
        err=>
        {
          usernameValue=err;
        }
      )

      


      

      // let keyId: any;
      //   localStorage.setItem(keyId, idValue);



      

      this.http.login(this.loginForm.value)       // calls login method from service to perform authentication
      .subscribe({
       next:(res)=> {
        alert(res.message)  

        // this.toast.success({detail:'Success', summary:res.message, duration:5000});
        
        this.http.storeToken(res.token);

        let keyRole: any;
        localStorage.setItem("keyRole", roleValue);          // stores authentication token in local storage & navigates to different dahsboards based in user's role
        localStorage.setItem("keyUsername", usernameValue)
        // sessionStorage.setItem("keyRole", roleValue);
        
        
        // console.log(res.token)
        console.log("hello"+roleValue)
        

        if(roleValue == "Admin")
        {
          this.r.navigate(['dashboard'])
        }
        else if(roleValue == "Student")
        {
          this.r.navigate(['studash'])
        }
	      else if(roleValue == "OfficeStaff")
	      {
	      this.r.navigate(['offdash'])
	      }
        
        // console.log("Role="+roleValue)
        this.loginForm.reset();                 // resets login form

      },
      error:(err)=>{
        alert(err.error.message);

      }

      })



    }
    else 
    
    {
      console.log("error")
    }
    

    


  }

  ngOnInit(): void {


  }

}

