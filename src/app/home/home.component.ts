import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartData} from "../shared/models/chart-data.model";
import {ChartName} from "../shared/enums/chart-name.enum";

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @ViewChild('selection') selection;

  dataCharts: ChartData[] = [
    { uiName: 'Auctions',     name: ChartName.AUCTIONS,     selected: false },
    { uiName: 'Demographics', name: ChartName.DEMOGRAPHICS, selected: false },
    { uiName: 'Devices',      name: ChartName.DEVICES,      selected: false }
  ];

  constructor() { }

  ngOnInit() {

  }

  shouldPreSelect(option): boolean {
    return option.selected;
  }

  shouldDisplayChart(chartName: ChartName): boolean {
    let chart = this.dataCharts.find(item => item.name === chartName);
    if (chart && chart.selected) {
      return chart.selected;
    } else {
      return false;
    }
  }

  updateDashboard(data: ChartData[]): void {
    this.dataCharts.map(item => {
      item.selected = this.selection.value.includes(item);
    })
  }
}
