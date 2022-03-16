import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-monthly-usage-chart',
  templateUrl: './monthly-usage-chart.component.html',
  styleUrls: ['./monthly-usage-chart.component.css']
})
export class MonthlyUsageChartComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
   }

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
        data: [0, 10, 5, 2, 20, 30, 45, 65, 32, 42, 14, 30],
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

    const myChart = new Chart(<HTMLCanvasElement>document.getElementById('monthlyChart'), config);
  }

}
