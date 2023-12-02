import { Component, OnInit } from '@angular/core';
import { ResetPassword } from '../capmodels/reset-password.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  resetPassword!:FormGroup;
  emailToReset!: string;
  emailToken!:string;
  resetPasswordObj = new ResetPassword();

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }


}
