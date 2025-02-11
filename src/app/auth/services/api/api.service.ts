import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInformation, NewUserInfo, SignupResponse, Tokens } from '../../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(credentials: LoginInformation): Observable<Tokens> {
    return this.http.post<Tokens>('v1/login', credentials);
  }

  signUp(signUpInfo: NewUserInfo): Observable<SignupResponse> {
    return this.http.post<SignupResponse>('v1/users', signUpInfo);
  }

  refreshToken(refreshToken: string): Observable<Tokens> {
    const payLoad = { refreshToken };
    return this.http.post<Tokens>('v1/refresh', payLoad);
  }

  resetPassword(email: string) {
    const data = { data: { login: email } };
    return this.http.post<any>('password_reset', data);
  }
}
