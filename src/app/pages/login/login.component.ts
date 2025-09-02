import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  // NOTES:
  // Username: hradmin@gmail.com
  // Password: 112233

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    let loginDetails = {
      userName: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };
    console.log(loginDetails);
    
    if(loginDetails.userName == "hradmin@gmail.com" && loginDetails.password == "112233") {
      console.log("Login successful");
      // localStorage.setItem('employeeLogin', );
      this.router.navigateByUrl('dashboard');
    } else {
      alert("Invalid Credentials!!!");
    }
  }
}
