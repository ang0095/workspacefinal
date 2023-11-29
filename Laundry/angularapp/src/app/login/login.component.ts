import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, ReactiveFormsModule, Validators,RequiredValidator } from '@angular/forms';
import {FormArray, FormControl, FormGroup, Validator} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  scheduleForm:any;
  schedules:any;
  constructor(private fb:FormBuilder, private http:HttpClient) 
  { 
    this.scheduleForm = this.fb.group({
      email:['Email is required',Validators.email],
      password:['Password is required',Validators.required]

    })
  }

  getCourses()
  {
    
  }
  onSubmit()
  {
    this.http.getCourses().subscribe(r => this.schedules=r);

  }

  ngOnInit(): void {


  }

}
