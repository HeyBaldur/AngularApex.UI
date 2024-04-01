import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { RegisterUserModel } from 'src/app/core/models/requests/registerUserModel';
import { AuthService } from '../../services/auth.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserAccountDto } from 'src/app/core/models/dtos/userAccountDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: FormGroup;
  /**
   * TIPS:
   * Making properties readonly ensures that their values cannot be modified accidentally
   * or intentionally after they are set. This helps maintain immutability and prevents unexpected behavior.
   * The TypeScript compiler performs additional checks on readonly properties 
   * to ensure that they are not modified after initialization
   * Fields may be prefixed with the readonly modifier. This prevents assignments to the field outside of the constructor.
   * Please read https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly
   * @param authService 
   * @param router 
   */
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    // Initialize the form
    this.form = new FormGroup({
      fullName: new UntypedFormControl('', [Validators.required]),
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl('', [Validators.required]),
    });
  }

  // Submit request to the API in order to created a new account.
  subtmit(form: RegisterUserModel): void {
    this.authService
      .signUp(form)
      .pipe(
        catchError((err) => {
          console.error(err);
          return of(err);
        })
      )
      .subscribe((response: UserAccountDto) => {
        // Let user know information has been saved
        if (response.id) {
          this.router.navigateByUrl('auth/login');
        }
      });
  }
}
