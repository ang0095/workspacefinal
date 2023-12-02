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
  

  constructor(private fb:FormBuilder, private http:LoginService, ) 
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
        const  email = this.resetPasswordForm.value.email;
        const  newPassword  = this.resetPasswordForm.value.newPassword;
        
        console.log(email, newPassword);

        this.http.resetPassword(email, newPassword)
          .subscribe({
            next:(res =>{
              alert(res.message)
              this.registerForm.reset();
              this.routes.navigate(['login']);
            }),
            error:(err =>{
              alert(err?.error.message)
            })
      });
      }
    }
  }

  