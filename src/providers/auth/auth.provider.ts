import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginResponse } from '../../model/response/login-response';
import { LoginRequest } from '../../model/request/login-request';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(
    public http: HttpClient
  ) {}

  login(loginRequest: LoginRequest): Observable<LoginResponse>{
    return this.http.post<LoginResponse>('http://103.57.211.23/api/v1/auth/login', loginRequest);
  }

}
