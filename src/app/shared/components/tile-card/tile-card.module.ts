import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileCardComponent } from './tile-card.component';

@NgModule({
  declarations: [TileCardComponent],
  imports: [
    CommonModule
  ],
  exports: [TileCardComponent]
})
export class TileCardModule { }
