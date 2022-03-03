import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
   }

  ngOnInit(): void {
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  
    const data = {
      labels: labels,
      datasets: [{
        label: 'Energy Usage',
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 255, 0)'],
        borderColor: 'rgb(255, 99, 132)',
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
        maintainAspectRatio: 'false',
      }
    };
  
    const myChart = new Chart(<HTMLCanvasElement>document.getElementById('monthlyChart'), config);
  }

}
