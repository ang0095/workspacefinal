import { Component, OnInit } from '@angular/core';
import { ResetPassword } from '../capmodels/reset-password.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../helpers/confirm-password.validator';
import { LoginService } from '../capstoneservice/login.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  resetPasswordForm!:FormGroup;
  emailToReset!: string;
  emailToken!:string;
  resetPasswordObj = new ResetPassword();

  constructor(private fb:FormBuilder, private http:LoginService) 
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
        const { email, newPassword } = this.resetPasswordForm.value;
        this.http.resetPassword(email, newPassword)
          .subscribe(
            () => {
              console.log('Password reset successful');
              // Add any additional logic for success
            },
            error => {
              console.error('Password reset failed:', error);
              // Handle error accordingly
            }
          );
      }
    }
  }

  