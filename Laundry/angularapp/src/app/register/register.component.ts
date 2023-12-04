import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator, FormBuilder, ReactiveFormsModule, Validators,RequiredValidator } from '@angular/forms';
import {FormArray, FormControl, FormGroup, Validator} from '@angular/forms';
import { LoginService } from '../capstoneservice/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  registers:any;   // Holds data retrieved from the server

  constructor(private fb:FormBuilder, private http:LoginService, private routes:Router) 
  { 
    this.registerForm = this.fb.group({
      userName:['',Validators.required],
      email:['',[Validators.required,this.emailValidator]],
      password:['',Validators.required],
      // mobileNumber:['',Validators.required],
      cpassword:['', Validators.required],
      role:['',Validators.required]
    },
    {
      validator:this.passwordMatch
    });

  }

  emailValidator(control)
  {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailPattern.test(control.value) ? null:{invalidEmail :true};
    
  }
  

  passwordMatch(group:FormGroup)
  {
    const password = group.get('password').value;
    const confirmpass = group.get('cpassword').value;
     
    return password === confirmpass ? null : {mismatch:true};       // returns null if they match or an object(mismatch:true) is they dont
  }
  
  isDropdownOpen : boolean = false;
  toggleDropdown()
  {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(){
    this.isDropdownOpen = false;
  }

  onRegister()                            // validates the registration form
  {                                       // call register method from service to perform user registration
    if(this.registerForm.valid)
    {
      console.log("success");
      this.http.register(this.registerForm.value)
      .subscribe({
        next:(res =>{
          alert(res.message)          //alerts user with a success message
          this.registerForm.reset();
          this.routes.navigate(['login']);
        }),
        error:(err =>{
          alert(err?.error.message)  // else alerts user with a error message
        })
      })
      // this.http.getCourses().subscribe(r => this.registers=r);


    }
    else 
    {
      // throw exception?
    }
    
    

  }


  ngOnInit(): void {
  }
 

}