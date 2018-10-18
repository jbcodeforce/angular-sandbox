import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MapdemoComponent } from '../mapdemo/mapdemo.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
     { path: 'mapdemo', component: MapdemoComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];
