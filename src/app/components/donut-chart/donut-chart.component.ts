import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent} from "ng-apexcharts";
import {User} from "../../models/user.model";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit, OnChanges {

  @Input() users: [User];
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  chartSeries = [];
  chartLabels = [];

  constructor() {
  }

  ngOnInit(): void {
    this.prepareDataToChart();
  }

  createChart() {
    this.chartOptions = {
      series: this.chartSeries,
      chart: {
        type: "donut"
      },
      labels: this.chartLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  prepareDataToChart() {
    this.chartSeries = this.users.map(user => user.participation);
    this.chartLabels = this.users.map(user =>
      `${user.firstName} ${user.lastName}`
    );
    if (this.chartOptions && this.chart) {
      this.chart.updateOptions(this.chartOptions, true).then();
    }
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.users.currentValue != changes.users.previousValue) {
      this.users = changes.users.currentValue;
      this.prepareDataToChart();
    }
  }

}
