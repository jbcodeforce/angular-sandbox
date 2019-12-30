import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login(email: string, passwd: string): User {

    const userInfo: User = { email: email, password: passwd, firstname: 'test', access_token: 'testToken' };
    return userInfo;
  }

  
  constructor() { }
}
