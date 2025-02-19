import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-chart-dialog',
  templateUrl: './chart-dialog.component.html',
  styleUrls: ['./chart-dialog.component.css']
})
export class ChartDialogComponent  implements OnInit, OnDestroy {
  @Input() data: any;
  chart: any;

  ngOnInit(): void {
    this.initChart();
  }

  initChart() {
    const container = document.querySelector('#chartContainer') as HTMLElement;
    this.chart = echarts.init(container);
    this.chart.setOption(this.data); // 使用傳入的圖表資料
  }

  close() {
    this.chart.dispose();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}