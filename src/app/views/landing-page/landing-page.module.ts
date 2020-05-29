import { EndpointsService } from './../../shared/services/endpoints/endpoints.service';
import { RestApiMethodsService } from './../../shared/services/rest-api-methods.service';
import { TileCardModule } from './../../shared/components/tile-card/tile-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page.routing.module';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    TileCardModule
  ]
})
export class LandingPageModule { }
