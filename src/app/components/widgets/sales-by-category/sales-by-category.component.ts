import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-by-category.component.html',
  styleUrl: './sales-by-category.component.scss'
})
export class SalesByCategoryComponent {
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Genre'
    },
    xAxis: {
      categories: [
        'Action',
        'Adventure',
        'Comedy',
        'Drama',
        'Fantasy',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Action',
          y: 41.0,
          color: '#CE1212',
        },
        {
          name: 'Adventure',
          y: 33.8,
          color: '#555273',
        },
        {
          name: 'Comedy',
          y: 6.5,
          color: '#EEEBDD',
        },
        {
          name: 'Drama',
          y: 15.2,
          color: '#E23E57',
        },
        {
          name: 'Fantasy',
          y: 3.5,
          color: '#810000',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  }as any)

  constructor() { }

  ngOnInit(): void {
  }
}
