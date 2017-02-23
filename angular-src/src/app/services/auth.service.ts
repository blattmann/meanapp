import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }

  registerUser(user) {
    let headers = new Headers();
    let registerUrl = 'http://localhost:3000/users/register';
    headers.append('ContentType', 'application/json');
    return this.http.post(registerUrl, user, {headers: headers}).map(res => res.json());
  }
}
