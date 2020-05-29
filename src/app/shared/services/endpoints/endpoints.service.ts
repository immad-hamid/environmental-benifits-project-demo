import { RestApiMethodsService } from './../rest-api-methods.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EndpointsService {

    constructor(private httpService: RestApiMethodsService) { }

    getEnvListings() {
        return this.httpService.get('/listings');
    }
}
