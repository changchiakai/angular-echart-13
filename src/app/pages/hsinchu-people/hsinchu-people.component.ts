import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HsinchuPeopleService } from 'src/app/core/service/hsinchu-people.service';
import * as echarts from 'echarts';

@Component({
  selector: 'app-hsinchu-people',
  templateUrl: './hsinchu-people.component.html',
  styleUrls: ['./hsinchu-people.component.css']
})
export class HsinchuPeopleComponent implements OnInit, AfterViewInit {

  @ViewChild('chart', { static: true }) chartRef!: ElementRef;
  private myChart!: echarts.ECharts;


  peopleList: any[] = [];

  constructor(private hsinchuPeopleService: HsinchuPeopleService) { }

  ngAfterViewInit(): void {
    this.myChart = echarts.init(this.chartRef.nativeElement, null, { locale: 'ZH', renderer: 'canvas' });
    this.peopleList = this.hsinchuPeopleService.getPlist();
    console.log('this.peopleList:', this.peopleList);

    this.prepareChartData();
  }
  ngOnInit(): void {
    // this.getHsinchuPeopleList();


  }
  prepareChartData() {
    // 根據 yearMonth 將資料進行分組
    const groupedData: { [key: string]: any[] } = {};

    // 分組資料
    this.peopleList.forEach(item => {
      if (!groupedData[item.yearMonth]) {
        groupedData[item.yearMonth] = [];
      }
      groupedData[item.yearMonth].push(item);
    });

    const xAxisData = Object.keys(groupedData); // 取得所有的 yearMonth 作為 x 軸資料
    const maleData = [];
    const femaleData = [];
    const totalData = [];

    // 根據性別分類，並填充每條線的 y 軸資料
    xAxisData.forEach(yearMonth => {
      const male = groupedData[yearMonth].find(item => item.gender === '男')?.population || 0;
      const female = groupedData[yearMonth].find(item => item.gender === '女')?.population || 0;
      const total = groupedData[yearMonth].find(item => item.gender === '男女合計')?.population || 0;

      maleData.push(male);
      femaleData.push(female);
      totalData.push(total);
    });

    // 配置 ECharts 設定

      this.myChart.setOption({
        title: { text: '新竹市 人口數折線圖'},
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['男生', '女生', '男女合計']
        },
        xAxis: {
          type: 'category',
          data: xAxisData, // yearMonth 作為 x 軸
          axisLabel: {
            formatter: (value: string) => {
              return `${value.slice(0, 3)}-${value.slice(3, 5)}`; // 格式化年月
            }
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '男生',
            type: 'line',
            data: maleData
          },
          {
            name: '女生',
            type: 'line',
            data: femaleData
          },
          {
            name: '男女合計',
            type: 'line',
            data: totalData
          }
        ]
      }
    );
  }

  getHsinchuPeopleList() {
    this.hsinchuPeopleService.getHsinChuPeopleList().subscribe((res) => {
      console.warn('res', res);
      this.peopleList = res;
      console.log('this.peopleList:', this.peopleList);

    }, (error) => {
      console.warn('error', error);
    })
  }

}
