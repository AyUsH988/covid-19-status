import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CovidUrl, countries,getStatusByCountry,stateUrl,cityUrl} from '../app/status-component/api-config';


@Injectable({
  providedIn: 'root'
})

export class CustomHttpService {

  constructor(public http: HttpClient) {}
  covidurl = CovidUrl;
  countryUrl = countries;
  getStatusByCountryUrl=getStatusByCountry;
  stateUrl=stateUrl;
  cityUrl = cityUrl

  getCountrtList() {
    return this.http.get(this.countryUrl);
  }

  getStatusOfCountry() {
    return this.http.get(this.getStatusByCountryUrl);
  }

  getStatusOfState() {
    return this.http.get(this.stateUrl);
  }

  getStatusOfCity() {
    return this.http.get(this.cityUrl);
  }


}
