import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})
export class PiechartComponent implements OnInit, OnChanges {

  // @Input() chartData;
  // @Input() chartLabel;
  // chartType: string = 'pie';
  // chartDatasets: any;
  // chartLabels: [];
  // @Output() onClick = new EventEmitter();

  ngOnInit() {
    // this.renderChart()
  }

  // renderChart() {
  //   this.chartDatasets = [{
  //     data: this.chartData,
  //     borderWidth: 0, //this will hide border
  //   }];
  //   this.chartLabels = this.chartLabel;
  // }

  // public chartOptions: any = {
  //   responsive: true,
  //   // maintainAspectRatio: true,
  //   borderWidth: 0,
  //   legend: {
  //     segmentShowStroke: false,
  //     display: true,
  //     position: "bottom",
  //     labels: {
  //       // fontColor: '#FF3333',
  //       boxWidth: 12,
  //       fontSize: 10,
  //       // usePointStyle: true,
  //       cursor: "pointer",
  //     }
  //   },
  //   plugins: {
  //     labels: {
  //       render: 'value',
  //     }
  //   },
  // }

  // chartClicked(event) {
  //   this.onClick.emit(event);
  // }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes && changes.chartData && changes.chartData.currentValue) {
    //   this.chartData = changes.chartData.currentValue;
    // this.chartLabel = changes.chartLabel.currentValue;
    // this.renderChart();
    }
  // }

}
