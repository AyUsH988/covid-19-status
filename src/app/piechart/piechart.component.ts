import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})
export class PiechartComponent implements OnInit, OnChanges {

  @Input('label') label;
  @Input('data') data;


  chartDatasets;
  public chartOptions: any = {
    responsive: true,
    borderWidth: 0,
    legend: {
      segmentShowStroke: false,
      display: true,
      position: "bottom",
      labels: {
        fontColor: 'white',
        boxWidth: 12,
        fontSize: 10,
        cursor: "pointer",
      }
    },
    plugins: {
      labels: {
        render: 'value',
        fontColor: 'white',
      }
    },
  }
  // chartLabels = ['Download','In', 'Store'];
  // pieChartData = [300, 500, 100];
  chartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];

  

  ngOnInit() {
    // this.renderChart()
    this.renderChart();
  }

  renderChart() {
    this.chartDatasets = [{
      data: this.data,
      borderWidth: 0, 
    }];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.data && changes.data.currentValue) {
      this.data = changes.data.currentValue;
    this.renderChart();
    }
  }
  

}
