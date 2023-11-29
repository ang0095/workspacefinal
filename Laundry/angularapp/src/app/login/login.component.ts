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
  constructor(private fb:FormBuilder) 
  { 
    this.scheduleForm = this.fb.group({
      email:['',Validators.email],
      password:['',Validators.required]

    })
  }
  onSubmit()
  {
    
  }

  ngOnInit(): void {


  }

}
