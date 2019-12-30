import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { User } from './User';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

 it('should get a user when calling login given username and password', () => {
    const service: LoginService = TestBed.get(LoginService);
    const user: User = service.login("test@email.com","pwd");
    expect(user.firstname).toEqual('test');
   });
});
