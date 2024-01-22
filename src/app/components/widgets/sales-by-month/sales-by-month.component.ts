import { Chart, ChartModule } from 'angular-highcharts';
import { Component } from '@angular/core';


@Component({
  selector: 'app-sales-by-month',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-by-month.component.html',
  styleUrl: './sales-by-month.component.scss'
})
export class SalesByMonthComponent {
  chart = new Chart({ 
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'MOST MONTH WATCHED'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    series: [
      {
        name: "Shows",
        type: "line",
        color: '#E23E57',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'Movie',
        type: 'line',
        color: '#555273',
        data: [
          47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159
        ]
      },
      {
        name: 'Series',
        type: 'line',
        color: '#65799B',
        data: [
          17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
        ]
      },
    ],
    credits: {
      enabled: false
    } } as any);

  constructor() { }

  ngOnInit(): void {
  }
}

