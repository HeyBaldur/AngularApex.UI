import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { RegisterUserModel } from 'src/app/core/models/requests/registerUserModel';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: FormGroup;
  constructor(private readonly authService: AuthService) {
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

  subtmit(form: RegisterUserModel): void {
    this.authService.signUp(form).subscribe((response) => {
      // Let user know information has been saved
      // Redirect user to the login page
    });
  }
}
