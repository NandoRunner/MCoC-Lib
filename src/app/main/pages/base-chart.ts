import { OnInit, ViewChild, Directive } from '@angular/core';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js';

@Directive()
export class BaseChartPage implements OnInit {
  protected title: string;
  protected subTitle: string;
  protected language: string;

  showPie = false;
  showBar = true;

  protected colorArray: string[];
  protected classTypes: string[];
  protected listLabels: string[];

  @ViewChild('viewPieChart', { static: false }) viewPieChart;
  @ViewChild('viewBarChart', { static: false }) viewBarChart;

  protected myPieChart: any;
  protected myBarChart: any;

  protected chartType: any;
  protected splitMin: number;
  protected splitMax: number;
  protected measure: string;

  loading: HTMLIonLoadingElement;

  protected lists$: Observable<any>;

  protected constructor() {
    this.colorArray = [
      'rgb(15, 148, 195)',
      'rgb(0, 0, 139)',
      'rgb(238, 183, 19)',
      'rgb(204, 22, 22)',
      'rgb(0, 139, 0)',
      'rgb(128, 0, 128)',
    ];
    this.classTypes = [
      'Cosmic',
      'Tech',
      'Mutant',
      'Skill',
      'Science',
      'Mystic',
    ];
  }

  ngOnInit() {}

  protected createChart(chartType: string, view: any): Chart {
    return new Chart(view.nativeElement, {
      type: chartType,
      data: {
        labels: [],
        datasets: [
          {
            label: '',
            data: [],
            backgroundColor: [],
            borderColor: '',
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          labels: {
            boxWidth: 0,
          },
        },
      },
      // },
      // scales: {
      //   yAxes: [{
      //     ticks: {
      //       beginAtZero: true,
      //     }
      //   }]
      // }
    });
  }

  protected preparePieChart() {
    this.myPieChart.options.legend.labels.boxWidth = 8;
    let i = 0;
    this.lists$.forEach((a) => {
      a.forEach((b) => {
        this.myPieChart.data.datasets[0].backgroundColor[i] = this.colorArray[
          b.id
        ];
        this.myPieChart.data.labels[i] = b.name;
        this.myPieChart.data.datasets[0].data[i++] = b.qty;
        this.myPieChart.update();
      });
    });

    this.myPieChart.update();
  }

  protected prepareBarChart() {
    this.myBarChart.options.scales.yAxes[0].ticks.beginAtZero = true;
    this.myBarChart.update();
    let i = 0;
    this.lists$.forEach((a) => {
      a.forEach((b) => {
        this.myBarChart.data.datasets[0].backgroundColor[i] = this.colorArray[
          b.id
        ];
        this.myBarChart.data.labels[i] = b.name;
        this.myBarChart.data.datasets[0].data[i++] = b.qty;
        this.myBarChart.update();
      });
    });
  }
}
