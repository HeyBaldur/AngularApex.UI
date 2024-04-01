import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}

  checkLogin(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return of(token !== null);
  }
}
