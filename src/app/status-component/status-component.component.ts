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
  selectedCity = '';
  selectedType = 'country';
  testUrl;
  helpLineList : any = [];
  stateHelpLine = '';
  chartLabel = ['Death','Total Cases', 'Recovered'];
  countryTotalChartData = [];
  countryLatestChartData = [];
  
  stateTotalChartData = [];
  cityChartLabel = ['Death','Total Cases', 'Recovered', 'Active']
  cityTotalChartData =[];
  cityLatestChartData = []


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
    this.countryTotalChartData = [];
    this.countryLatestChartData =[]

    this.activeCountryStatus = selected;
    this.countryTotalChartData.push(this.activeCountryStatus.TotalDeaths);
    this.countryTotalChartData.push(this.activeCountryStatus.TotalConfirmed);
    this.countryTotalChartData.push(this.activeCountryStatus.TotalRecovered);

    this.countryLatestChartData.push(this.activeCountryStatus.NewDeaths);

    this.countryLatestChartData.push(this.activeCountryStatus.NewConfirmed);
    this.countryLatestChartData.push(this.activeCountryStatus.TotalRecovered);


  }

  selectedState(event) {
    this.stateTotalChartData = [];
    this.activeStateStatus = event;
    this.stateTotalChartData.push(this.activeStateStatus.deaths);
    this.stateTotalChartData.push(this.activeStateStatus.noOfCases);
    this.stateTotalChartData.push(this.activeStateStatus.cured);
    
  }

  getCityList(state) {
    console.log(this.districtList)
    this.citiesList = Object.keys(this.districtList[state]['districtData']);
    this.selectedStateForCity = state;
  }

  getStatusOfCity(event) {
    this.selectedCity = event;
    this.cityTotalChartData = [];
    console.log('city',event)
    this.activeCityStatus = this.districtList[this.selectedStateForCity]['districtData'][event];

    this.cityTotalChartData.push(this.activeCityStatus.deceased);
    this.cityTotalChartData.push(this.activeCityStatus.confirmed);
    this.cityTotalChartData.push(this.activeCityStatus.recovered);
    this.cityTotalChartData.push(this.activeCityStatus.active);

    this.cityLatestChartData.push(this.activeCityStatus.delta.deceased);
    this.cityLatestChartData.push(this.activeCityStatus.delta.confirmed);
    this.cityLatestChartData.push(this.activeCityStatus.delta.recovered);


  }

  showByType(opt) {
    this.selectedType = opt
  }

  getHelpLine() {
    for(let i=0;i<this.helpLineList.length; i++) {
      if(this.helpLineList[i] == this.activeStateStatus.state) {
        this.stateHelpLine = this.helpLineList[i].helpline_number;
      }
    }
  }
}
