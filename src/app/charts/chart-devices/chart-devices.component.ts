import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'chart-devices',
  templateUrl: './chart-devices.component.html'
})

export class ChartDevicesComponent implements OnInit {

  @Output() chartRemoved: EventEmitter<boolean> = new EventEmitter<boolean>();

  doughnutChartLabels: string[] = ['Desktop', 'Tablet', 'Mobile'];
  doughnutChartData: number[] = [350, 450, 100];
  doughnutChartType: string = 'doughnut';
  doughnutChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
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

  emitRemoveChart(): void {
    this.chartRemoved.emit(true);
  }

}
