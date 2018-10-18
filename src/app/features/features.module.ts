import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MapdemoComponent } from './mapdemo/mapdemo.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [HomeComponent, MapdemoComponent],
  exports: [HomeComponent]
})
export class FeaturesModule { }
