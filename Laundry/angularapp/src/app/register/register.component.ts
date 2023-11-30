import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator, FormBuilder, ReactiveFormsModule, Validators,RequiredValidator } from '@angular/forms';
import {FormArray, FormControl, FormGroup, Validator} from '@angular/forms';
import { LoginService } from '../capstoneservice/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:any;
  registers:any;

  constructor(private fb:FormBuilder, private http:LoginService) 
  { 
    this.registerForm = this.fb.group({
      userName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],

    })
  }


  ngOnInit(): void {
  }
 

}
