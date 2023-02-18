import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private router: Router, private _snackBar: MatSnackBar) { }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)])
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }

    return this.password.hasError('minLength(8)') ? 'password length must be greater than 8' : '';
  }

  loggedIn() {
    this._snackBar.open("Logged In Successfully", 'Dance');
    this.router.navigate(['/'])
  }
}
