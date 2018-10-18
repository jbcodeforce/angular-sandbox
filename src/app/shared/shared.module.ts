import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ HeaderComponent,
    FooterComponent,
    TileComponent,
    InputComponent ],
  exports: [ FooterComponent,
    TileComponent,
   HeaderComponent,
   InputComponent ]
})
export class SharedModule { }
