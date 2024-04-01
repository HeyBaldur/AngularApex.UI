import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'apex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private readonly router: Router) {}

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('auth/login');
  }
}
