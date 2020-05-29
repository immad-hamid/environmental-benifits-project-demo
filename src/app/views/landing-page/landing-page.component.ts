import { EndpointsService } from './../../shared/services/endpoints/endpoints.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public listingData$: Observable<any>;

  constructor(private endPoint: EndpointsService) { }

  ngOnInit() {
    this.listingData$ = this.endPoint.getEnvListings();
  }
}
