import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent,
    HeaderComponent,
    // InputComponent
 ],
 exports: [FooterComponent,
   HeaderComponent]
})
export class SharedModule { }
