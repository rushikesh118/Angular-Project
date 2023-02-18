import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private router: Router, private _snackBar: MatSnackBar) { }
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
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
    this._snackBar.open("Sign up Successfully Successfully", 'Dance');
    this.router.navigate(['/'])
  }

}
