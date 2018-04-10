import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'chart-demographics',
  templateUrl: './chart-demographics.component.html'
})

export class ChartDemographicsComponent implements OnInit {

  @Output() chartRemoved: EventEmitter<boolean> = new EventEmitter<boolean>();

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          callback: function(value) {
            return value + "%"
          }
        },
        scaleLabel: {
          display: true,
          labelString: "Percentage"
        }
      }]
    }
  };
  barChartLabels: string[] = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
  barChartType: string = 'bar';
  barChartLegend: boolean = true;

  barChartData: any[] = [
    {data: [12, 27, 16, 10, 56, 14, 4], label: 'Age %'}
  ];

  constructor() {}

  ngOnInit() {

  }

  emitRemoveChart(): void {
    this.chartRemoved.emit(true);
  }
}
