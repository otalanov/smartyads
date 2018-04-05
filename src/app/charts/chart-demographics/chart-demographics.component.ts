import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'chart-demographics',
  templateUrl: './chart-demographics.component.html'
})

export class ChartDemographicsComponent implements OnInit {

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: false,
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

  public chartClicked(e:any): void {
    console.log(e);
  }

  public chartHovered(e:any): void {
    console.log(e);
  }
}
