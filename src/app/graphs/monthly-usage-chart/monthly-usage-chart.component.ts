import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-monthly-usage-chart',
  templateUrl: './monthly-usage-chart.component.html',
  styleUrls: ['./monthly-usage-chart.component.css']
})
export class MonthlyUsageChartComponent implements OnInit {

  constructor(private http:HttpClient) {
    Chart.register(...registerables);
  }
  
  test_id: Number = 0;
  usage?: Usage;
  chart?: Chart;

  ngOnInit(): void {

    const labels = [
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
      'January',
      'February',
      'March',
    ];
  
    const data = {
      labels: labels,
      datasets: [{
        label: 'Energy Usage',
        backgroundColor: 'rgb(35, 170, 250)',
        borderColor: 'rgb(35, 170, 250)',
        data: [5000, 3050, 4567, 5678, 4532, 2345, 4536, 3656, 4567, 3645, 2987, 4565],
      }]
    };
  
    const config: any = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            title: {
              display: 'true',
              text: 'kWh',
              align: 'center',
              padding: 20,
            }
          },
          x: {
            ticks: {
              padding: 20
            }
          }
        },
        responsive: 'true',
        maintainAspectRatio: 'true',
      }
    };

    this.chart = new Chart(<HTMLCanvasElement>document.getElementById('monthlyChart'), config);
  }

}

export interface Usage {
  id: Number;
  usage: number[];
}
