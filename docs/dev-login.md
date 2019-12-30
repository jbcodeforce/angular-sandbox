# How to implement a login page

The following requirements need to be supported:

* The application has a login page to get email and password then once authenticated the user is routed to a home page where he can access a set of business functions.

The login mechanism needs a component and a service so we can package them as a module. So to prepare the code I use the following commands:

```shell
ng g module features/login
ng g component features/login
ng g service features/login
```


## Start by tests of the login service

To do continuous testing start `ng test`

The first test to add is to get a User from a login operation given a user's email address as userid:

```Typescript
it('should get a user when calling login given username and password', () => {
  const user: User = loginService.login("eddie@email.com","pwd");
  expect(user.firstname).toEqual('Eddie');
 });
```

I use the Jasmine fit function to focus on this test to avoid running all the other tests while developing a new function. After tuning the import the test is failing as expected, so we need to add login method, User and then implement a simple login:

```Typescript
login(email: string, passwd: string): User {

    const userInfo: User = { email: email, password: passwd, firstname: 'test', access_token: 'testToken' };
    return userInfo;
  }
```

The second test is to verify the component for login and password form. We need to validate the user name as a mandatory field. The test in the login component looks like:

```Typescript
it('should have username as mandatory field', () => {
      const userNameElement = fixture.debugElement.query(By.css(('#usernameInput')));
      // the requirement is not on the input as html element attribute but in validation rule
      const componentInstance = userNameElement.componentInstance;
      expect(componentInstance.validations[0].type).toEqual('required');
  });
```

The test fails with "Cannot read property 'componentInstance' of null". So we need to create form and entry field in the login component. Follow the pattern introduced [here](https://angular.io/start/forms)

```html

```



We need now to verify the routing to the home page when user is logged in.

## 