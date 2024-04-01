import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { LoginUserModel } from 'src/app/core/models/requests/loginUserModel';
import { AuthService } from '../../services/auth.service';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    // Initialize the form
    this.form = new FormGroup({
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl('', [Validators.required]),
    });
  }

  // Create request to API in order to generate a new token.
  subtmit(form: LoginUserModel): void {
    this.authService
      .signIn(form)
      .pipe(
        catchError((err) => {
          console.error(err);
          return of(err);
        })
      )
      .subscribe((response) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigateByUrl('dashboard');
        } else {
          // Create a notification about wrong credentials or not exist user
        }
      });
  }
}
