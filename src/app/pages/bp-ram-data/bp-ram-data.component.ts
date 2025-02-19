import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import { ComputeService } from 'src/app/core/service/compute.service';
import { MenuService } from 'src/app/core/service/menu.service';
import { RamService } from 'src/app/core/service/ram.service';

export class RamMode {
  metric: string;
  unit: string;
  color: string;
  timestamp: number;
  value: number;
}


@Component({
  selector: 'app-bp-ram-data',
  templateUrl: './bp-ram-data.component.html',
  styleUrls: ['./bp-ram-data.component.css']
})
export class BpRamDataComponent implements OnInit {
  test!: EChartsOption

  @ViewChild('chart', { static: true }) chartRef!: ElementRef;
  private myChart!: echarts.ECharts;
  private isFullScreen = false;

  constructor(
    private computeService: ComputeService
    , private menuService: MenuService,
    private ramService: RamService
  ) { }

  ngAfterViewInit(): void {
    this.getRamData();
    this.myChart = echarts.init(this.chartRef.nativeElement, null, { locale: 'ZH', renderer: 'canvas' });

    const dataCount = 1000;
    const times = Array.from({ length: dataCount }, (_, i) => `${Math.floor(i / 10).toString().padStart(2, '0')}:${(i % 10) * 6}`);
    const usageData = Array.from({ length: dataCount }, () => Math.floor(Math.random() * 100));

    const option = {
      title: { text: '電腦使用率紀錄' + dataCount + "點" },
      tooltip: { trigger: 'axis' },
      toolbox: {
        feature: {

          dataZoom: { title: { zoom: '縮放', back: '還原' } },
          saveAsImage: { title: '儲存圖片' },
          myCustome: {

            title: "show all",
            icon: 'image://https://echarts.apache.org/zh/images/favicon.png',
            name: 'test',
            onclick: () => {
              console.log("test");
              this.toggleFullScreen();
            }
          },
          myfullTypeB: {

            title: "fullTypeB",
            icon: 'image://https://echarts.apache.org/zh/images/favicon.png',
            name: 'test',
            onclick: () => {
              console.log("test");
              this.fullTypeB();
            }
          },
          myfullTypeC: {

            title: "Bigger",
            icon: 'path://M6.41421 5H10V3H3V10H5V6.41421L9.29289 10.7071L10.7071 9.29289L6.41421 5ZM21 14H19V17.5858L14.7071 13.2929L13.2929 14.7071L17.5858 19H14V21H21V14Z',
            name: 'test',
            onclick: () => {
              console.log("test");
              this.fullTypeB();
            }
          },
          myfullTypeD: {
            title: "Small",
            icon: 'path://M15 4.00008H13V11.0001H20V9.00008H16.4142L20.7071 4.70718L19.2929 3.29297L15 7.58586V4.00008ZM4.00008 15H7.58586L3.29297 19.2929L4.70718 20.7071L9.00008 16.4142V20H11.0001V13H4.00008V15Z',
            name: 'test',
            onclick: () => {
              console.log("test");
              this.fullTypeB();
            }
          },
          // https://remixicon.com/
          
        }
      },
      dataZoom: [
        { type: 'inside' },
        { type: 'slider', show: true }
      ],
      xAxis: { type: 'category', data: times },
      yAxis: { type: 'value', axisLabel: { formatter: '{value} %' } },
      series: [{
        name: 'RAM 使用率',
        type: 'line',
        data: usageData,
        smooth: true,
        lineStyle: { color: '#5470C6' }
      }],
      backgroundColor: '#ffffff'  // 設定背景為白色
    };
    this.myChart.setOption(option);
  }

  ngOnInit() {
    this.getComputeData();

    this.menuService.menuState$.subscribe((state: boolean) => {
      console.log('Menu 狀態:', !state ? '顯示' : '隱藏');
      if (this.myChart) {
        setTimeout(() => {
          this.myChart.resize();
        }, 300);
      }
    });
  }

  ramList: RamMode[] = [];

  getRamData() {
    this.ramService.getRamData().subscribe((res) => {
      console.log("res; ", res);
      this.ramList = res;
    }, (error) => {
      console.warn('error', error);
    })
  }
  getComputeData() {
    this.computeService.getComputeData().subscribe((res) => {
      console.warn('res', res);

    }, (error) => {
      console.warn('error', error);
    })

  }
  toggleFullScreen(): void {

    const chartElement = this.chartRef.nativeElement;
    if (!this.isFullScreen) {
      chartElement.requestFullscreen?.();
      document.body.style.backgroundColor = '#fff'; // 改變背景顏色
    } else {
      document.exitFullscreen?.();
      document.body.style.backgroundColor = ''; // 還原背景顏色
    }
    this.isFullScreen = !this.isFullScreen;

    // 重新調整圖表大小，防止放大後不顯示完全
    this.myChart.resize();
  }
  fullTypeB() {
    const chartElement = this.chartRef.nativeElement;

    if (!this.isFullScreen) {
      // 將圖表容器設置為占滿整個螢幕
      chartElement.style.position = 'fixed';
      chartElement.style.top = '0';
      chartElement.style.left = '0';
      chartElement.style.width = '100vw';
      chartElement.style.height = '100vh';
      document.body.style.backgroundColor = '#fff'; // 改變背景顏色
    } else {
      // 還原原本的尺寸與位置
      chartElement.style.position = '';
      chartElement.style.top = '';
      chartElement.style.left = '';
      chartElement.style.width = '';
      chartElement.style.height = '';
      document.body.style.backgroundColor = ''; // 還原背景顏色
    }

    this.isFullScreen = !this.isFullScreen;

    // 重新調整圖表大小，防止放大後不顯示完全
    this.myChart.resize();
  }
}