import { Component, Input, OnInit } from '@angular/core';
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
        data: [],
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

    fetch('http://localhost:6060/energyUsage/' + this.test_id)
      .then((res) => res.json())
      .then((usage: Usage) => {
        this.usage = usage;
        console.log("Fetch succeeded");
        if (this.chart) {
            for (let monthData of this.usage.usage) {
              this.chart.data.datasets[0].data.push(monthData as number);
            }
            this.chart.update();
        }        
      })
      .catch((err) => {
        console.error('Error retrieving user', err);
    });

    this.chart = new Chart(<HTMLCanvasElement>document.getElementById('monthlyChart'), config);
  }

}

export interface Usage {
  id: Number;
  usage: number[];
}
