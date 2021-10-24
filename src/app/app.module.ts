import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { StatesComponent } from './states/states.component';
import { StatesNavComponent } from './states/states-nav/states-nav.component';
import { StatesMapComponent } from './states/states-map/states-map.component';
import { StateDataComponent } from './states/state-data/state-data.component';
import { StateInfographComponent } from './states/state-infograph/state-infograph.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    StatesComponent,
    StatesNavComponent,
    StatesMapComponent,
    StateDataComponent,
    StateInfographComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
   
    NgbModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
