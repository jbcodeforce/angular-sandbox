import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapdemoComponent } from './mapdemo/mapdemo.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent,MapdemoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
     HomeComponent, MapdemoComponent
  ]
})
export class FeaturesModule { }
