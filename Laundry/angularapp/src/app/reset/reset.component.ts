import { Component, OnInit } from '@angular/core';
import { ResetPassword } from '../capmodels/reset-password.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../helpers/confirm-password.validator';
import { LoginService } from '../capstoneservice/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  resetPasswordForm!:FormGroup;
  

  constructor(private fb:FormBuilder, private http:LoginService, private route:Router) 
  { 
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
   
    }

    // initializeForm():void
    // {
    //   this.resetPasswordForm = this.fb.group({
    //     email:['', [Validators.required, Validators.email]],
    //     newPassword:['', [Validators.required]],
    //   });
    // }

    resetPassword() {
      if (this.resetPasswordForm.valid) {
        const  {email, newPassword} = this.resetPasswordForm.value;
        //const  newPassword  = this.resetPasswordForm.value.newPassword;
        
        console.log(email, newPassword);

        this.http.resetPassword(email, newPassword)
          .subscribe(
            ()=>{
              console.log("success");
            },
            error=>{
              console.error("failure");
            }
          );
      }
    }
  }

  