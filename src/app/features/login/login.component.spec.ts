import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have username as mandatory field', () => {
    const userNameElement = fixture.debugElement.query(By.css(('#usernameInput')));
    // the requirement is not on the input as html element attribute but in validation rule
    const componentInstance = userNameElement.componentInstance;
    expect(componentInstance.validations[0].type).toEqual('required');
});
});
