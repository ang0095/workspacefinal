import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../capstoneservice/login.service';
import { Validators } from '@angular/forms';
 
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
 
  resetForm!:FormGroup;
 
  constructor(private fb:FormBuilder, private auth:LoginService, private router:Router) { }
 
  ngOnInit() {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
      cpassword: ['', Validators.required]
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
 
    onReset()
    {
     
      this.auth.reset(this.resetForm.value)
      .subscribe({
        next:(res) => {
          alert(res.message)
          this.router.navigate(['/login']);
        },
        error:(err) => {
          alert(err.error.message);
        }
      })
 
    }
 
}