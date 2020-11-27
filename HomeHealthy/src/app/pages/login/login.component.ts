import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.authService.login(this.form.value).subscribe(
        data => {
          console.log(data);
          this.tokenStorageService.saveToken(data.token);
          this.tokenStorageService.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorageService.getUser().roles;
          return this.router.navigate(['home']);
        },
        error => {
          console.log(error.error.errorMessage);
          this.errorMessage = error.error.errorMessage;
          this.isLoginFailed = true;
          this.isLoggedIn = false;
        }
    );
  }
}
  /*
    loginForm: FormGroup;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]]
      });
    }
    onSubmit(): void {
      if (this.loginForm.invalid) {
        return;
      }
      console.log(this.loginForm.value);
    }*/

