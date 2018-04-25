import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// App Specifics
import { RoutingModule } from './features/routing/routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './features/login/login.component';
// import { InputComponent } from './shared/input/input.component';
import { HomeComponent } from './features/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
//    LoginComponent,
  //  InputComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
