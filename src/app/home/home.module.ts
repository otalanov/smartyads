import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {CustomMaterialModule} from "../custom-material/custom-material.module";
import {ChartAuctionComponent} from "../charts/chart-auction/chart-auction.component";
import {ChartCountriesComponent} from "../charts/chart-countries/chart-countries.component";
import {ChartDemographicsComponent} from "../charts/chart-demographics/chart-demographics.component";
import {ChartDevicesComponent} from "../charts/chart-devices/chart-devices.component";
import {ChartNewUsersComponent} from "../charts/chart-new-users/chart-new-users.component";
import {ChartsModule} from "ng2-charts/index";
import {NgGridModule} from "angular2-grid/main";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule,
    ChartsModule,
    NgGridModule
  ],
  declarations: [
    HomeComponent,
    ChartDevicesComponent,
    ChartAuctionComponent,
    ChartNewUsersComponent,
    ChartCountriesComponent,
    ChartDemographicsComponent
  ],
  exports: [HomeComponent]
})

export class HomeModule {
}
