import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import * as auctionData from "./../../shared/data/auctions.json"
import {LineChartItem} from "../../shared/models/line-chart-item.model";
import {AuctionData} from "../../shared/models/auction-data.model";

@Component({
  selector: 'chart-auction',
  templateUrl: './chart-auction.component.html'
})

export class ChartAuctionComponent implements OnInit {

  @Output() chartRemoved: EventEmitter<boolean> = new EventEmitter<boolean>();

  auctionData: AuctionData;
  lineChartData: LineChartItem[] = [];
  lineChartLabels: string[];
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  lineChartColors: any[] = [
    { // grey
      backgroundColor: 'transparent',
      borderColor: 'rgb(85,217,217)',
      pointBackgroundColor: 'rgb(85,217,217)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(85,217,217)'
    },
    { // dark grey
      backgroundColor: 'transparent',
      borderColor: 'rgb(192,92,214)',
      pointBackgroundColor: 'rgb(192,92,214)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(192,92,214)'
    }
  ];
  lineChartLegend: boolean = false;
  lineChartType: string = 'line';

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.createAuctionData();
    if(this.auctionData.hasOwnProperty('timeline')) {
      this.lineChartLabels = this.auctionData.timeline;
    }
    this.parseYearData();
  }

  createAuctionData(): void {
    this.auctionData = Object.assign(auctionData);
  }

   parseYearData(): void {
     this.auctionData.years.forEach(function(year){
       let item = new LineChartItem();
       item.label = Object.keys(year)[0];
       item.data = Object.values(year)[0];
       this.lineChartData.push(item);
     }.bind(this));
   }

  emitRemoveChart(): void {
    this.chartRemoved.emit(true);
  }
}


