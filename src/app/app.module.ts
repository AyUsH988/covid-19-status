import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StatusComponentComponent } from './status-component/status-component.component';
import { StatusService } from './status-component/status-service.service';
import { CustomHttpService } from './customhttp-service.service';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import 'chartjs-plugin-labels';
import { PiechartComponent } from './piechart/piechart.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponentComponent,
    PiechartComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
    ChartsModule
  ],
  providers: [StatusService, CustomHttpService],
  // exports: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
