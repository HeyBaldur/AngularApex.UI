import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  CanActivateChild,
  UrlTree,
} from '@angular/router';
import { map, Observable, from } from 'rxjs';
import { LocalService } from 'src/app/shared/services/local.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate, CanActivateChild {
  constructor(private authService: LocalService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return from(this.authService.checkLogin()).pipe(
      map((response) => {
        if (!response) {
          this.router.navigateByUrl('/auth/login');
        }

        return response;
      })
    );
  }

  canActivateChild(): Observable<boolean | UrlTree> {
    return this.canActivate();
  }
}
