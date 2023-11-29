import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, ReactiveFormsModule, Validators,RequiredValidator } from '@angular/forms';
import {FormArray, FormControl, FormGroup, Validator} from '@angular/forms';
import { LoginService } from '../capstoneservice/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  scheduleForm:any;
  schedules:any;
  constructor(private fb:FormBuilder, private http:LoginService) 
  { 
    this.scheduleForm = this.fb.group({
      userId:['',Validators.required],
      password:['',Validators.required]

    })
  }

  
  onSubmit()
  {
    this.http.getCourses().subscribe(r => this.schedules=r);
    console.log("success");

  }

  ngOnInit(): void {


  }

}

