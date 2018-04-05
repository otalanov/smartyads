import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'chart-devices',
  templateUrl: './chart-devices.component.html'
})

export class ChartDevicesComponent implements OnInit {

  doughnutChartLabels: string[] = ['Desktop', 'Tablet', 'Mobile'];
  doughnutChartData: number[] = [350, 450, 100];
  doughnutChartType: string = 'doughnut';
  doughnutChartOptions: any = {
    responsive: false
  };

  overallDevices: number = 0;

  constructor() {}

  ngOnInit() {
    this.countOverallDevices();
    console.log(this.overallDevices);
  }

  countOverallDevices(): void {
    this.overallDevices = this.doughnutChartData.reduce((a, b) => a + b, 0);
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  public chartHovered(e:any):void {
    console.log(e);
  }

}
