import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { LoginUserModel } from 'src/app/core/models/requests/loginUserModel';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  constructor(private readonly authService: AuthService) {
    // Initialize the form
    this.form = new FormGroup({
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl('', [Validators.required]),
    });
  }

  subtmit(form: LoginUserModel): void {
    this.authService.signIn(form).subscribe((response) => {
      // Redirect the user to the dashboard
    });
  }
}
