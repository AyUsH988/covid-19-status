import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from '../customhttp-service.service';

@Component({
  selector: 'app-status-component',
  templateUrl: './status-component.component.html',
  styleUrls: ['./status-component.component.css']
})
export class StatusComponentComponent implements OnInit {

  constructor(private httpService : CustomHttpService) { }
  keyword = 'Country';
  backupList :any = [];
  country;
  stateList:any =[];
  activeCountryStatus : any;
  activeStateStatus:any;
  districtList : any;
  statesInDistrict:any = [];
  citiesList: any;
  activeCityStatus : any
  selectedStateForCity : any;
  selectedCity = ''

  countriesList : any = [];
  ngOnInit() {
    this.httpService.getCountrtList().subscribe(res => {
      this.countriesList = res;
    });

    this.httpService.getStatusOfState().subscribe(res => {
      this.stateList = res;
      console.log(res)
    });

    this.httpService.getStatusOfCity().subscribe(res => {
      this.districtList = res;
      this.statesInDistrict = Object.keys(this.districtList);
      console.log(res);

    });

  }

  

  selectCustomer(selected) {
    this.activeCountryStatus = selected;
  }

  selectedState(event) {
    this.activeStateStatus = event
  }

  getCityList(state) {
    this.citiesList = Object.keys(this.districtList[state]['districtData']);
    this.selectedStateForCity = state;
  }

  getStatusOfCity(event) {
    this.selectedCity = event;
    console.log('city',event)
    this.activeCityStatus = this.districtList[this.selectedStateForCity]['districtData'][event];
  }
}
