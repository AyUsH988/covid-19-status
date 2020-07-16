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


  countriesList : any = [];
  ngOnInit() {
    this.httpService.getCountrtList().subscribe(res => {
      this.countriesList = res;
    });

    this.httpService.test().subscribe(res => {
      this.stateList = res;
    });

  }

  

  selectCustomer(selected) {
    this.activeCountryStatus = selected;
  }

  selectedState(event) {
    console.log(event)
    this.activeStateStatus = event
  }
}
