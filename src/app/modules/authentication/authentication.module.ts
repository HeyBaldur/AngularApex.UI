import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AuthRouteModule } from './auth.routes';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [CommonModule, AuthRouteModule, RouterModule],
  declarations: [AuthenticationComponent, LoginComponent, RegisterComponent],
})
export class AuthenticationModule {}
