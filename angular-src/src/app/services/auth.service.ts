import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }

  // Register user
  registerUser(user) {
    let headers = new Headers();
    let registerUrl = 'http://localhost:3000/users/register';
    headers.append('ContentType', 'application/json');
    return this.http.post(registerUrl, user, {headers: headers}).map(res => res.json());
  }

  // Authenticate user
  authenticateUser(user) {
    let headers = new Headers();
    let authenticateUrl = 'http://localhost:3000/users/authenticate';
    headers.append('Content-Type', 'application/json');
    return this.http.post(authenticateUrl, user, {headers: headers}).map(res => res.json());
  }

  // Store user data
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  // Logout user
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
