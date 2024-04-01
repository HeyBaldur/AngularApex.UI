import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndpointsAuth } from 'src/app/core/endpoints';
import { TokenDto } from 'src/app/core/models/dtos/tokenDto';
import { UserAccountDto } from 'src/app/core/models/dtos/userAccountDto';
import { LoginUserModel } from 'src/app/core/models/requests/loginUserModel';
import { RegisterUserModel } from 'src/app/core/models/requests/registerUserModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  // Get access token.
  public signIn(request: LoginUserModel): Observable<TokenDto> {
    return this.http.post<TokenDto>(EndpointsAuth.signIn, request);
  }

  // Create a new account.
  public signUp(request: RegisterUserModel): Observable<UserAccountDto> {
    return this.http.post<UserAccountDto>(EndpointsAuth.signUp, request);
  }
}
