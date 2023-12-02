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

  constructor(private fb:FormBuilder, private http:LoginService) { }

  ngOnInit(): void {
    // this.resetPasswordForm = this.fb.group({
    //   password:[null, Validators.required],
    //   confirmPassword:[null, Validators.required],



    },
    {
      validator: ConfirmPasswordValidator("password", "confirmPassword")
    }
    )
  }

  reset()
  {
    
  }


}
