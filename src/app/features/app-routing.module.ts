import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapdemoComponent } from './mapdemo/mapdemo.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'mapdemo', component: MapdemoComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true,
    enableTracing: false
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
