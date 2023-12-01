import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator, FormBuilder, ReactiveFormsModule, Validators,RequiredValidator } from '@angular/forms';
import {FormArray, FormControl, FormGroup, Validator} from '@angular/forms';
import { LoginService } from '../capstoneservice/login.service';
import { Router } from '@angular/router';
import { User } from '../capmodels/user';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  logins:any;

  uname:any;

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
      let roleValue:any;
      //redirect to courses page(get courses)
      console.log("success")

      this.http.getUserObj(this.loginForm.value.email)
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



      

      this.http.login(this.loginForm.value)
      .subscribe({
       next:(res)=> {
        alert(res.message)
        
        this.http.storeToken(res.token);

        let keyRole: any;
        localStorage.setItem("keyRole", roleValue);
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
        this.loginForm.reset();

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

