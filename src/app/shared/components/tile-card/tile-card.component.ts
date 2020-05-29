import { IListing } from './../../../interfaces/interfaces';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile-card',
  templateUrl: './tile-card.component.html',
  styleUrls: ['./tile-card.component.scss']
})
export class TileCardComponent {
  @Input() list: IListing;
}
