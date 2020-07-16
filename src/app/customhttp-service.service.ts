import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CovidUrl, countries,getStatusByCountry,testUrl} from '../app/status-component/api-config';


@Injectable({
  providedIn: 'root'
})

export class CustomHttpService {

  constructor(public http: HttpClient) {}
  covidurl = CovidUrl;
  countryUrl = countries;
  getStatusByCountryUrl=getStatusByCountry;
  testUrl=testUrl

  getCountrtList() {
    return this.http.get(this.countryUrl);
  }

  getStatusOfCountry() {
    return this.http.get(this.getStatusByCountryUrl);
  }

  test() {
    return this.http.get(this.testUrl);
  }


}
