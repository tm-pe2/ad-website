import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-yearly-usage-chart',
  templateUrl: './yearly-usage-chart.component.html',
  styleUrls: ['./yearly-usage-chart.component.css']
})
export class YearlyUsageChartComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
   }

  ngOnInit(): void {
    const labels = [
      2012,
      2013, 
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
    ];
  
    const data = {
      labels: labels,
      datasets: [{
        label: 'Energy Usage',
        backgroundColor: 'rgb(250, 200, 40)',
        borderColor: 'rgb(250, 200, 40)',
        data: [5000, 4500, 3600, 4800, 5200, 3900, 4005, 5500, 6000, 7000, 2500],
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
        maintainAspectRatio: 'false',
        responsive: 'true',
      }
    };

    const yourChart = new Chart(<HTMLCanvasElement>document.getElementById('yearlyChart'), config);
  }

}
