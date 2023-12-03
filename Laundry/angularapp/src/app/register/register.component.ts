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
  registers:any;

  constructor(private fb:FormBuilder, private http:LoginService, private routes:Router) 
  { 
    this.registerForm = this.fb.group({
      userName:['',Validators.required],
      email:['',Validators.email],
      password:['',Validators.required],
      // mobileNumber:['',Validators.required],
      `cpassword:['',Validators.required],
      role:['',Validators.required]
    },
      {
        validator:
      this.passwordMatch
    });

  }

  passwordMatch(group:FormGroup)
  {
    const password = group.get('password').value;
    const confirmpass = group.get('cpassword').value;
     
    return password === confirmpass ? null : {mismatch:true};
 
  }

  isDropdownOpen : boolean = false;
  toggleDropdown()
  {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(){
    this.isDropdownOpen = false;
  }

  onRegister()
  {
    if(this.registerForm.valid)
    {
      console.log("success");
      this.http.register(this.registerForm.value)
      .subscribe({
        next:(res =>{
          alert(res.message)
          this.registerForm.reset();
          this.routes.navigate(['login']);
        }),
        error:(err =>{
          alert(err?.error.message)
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
