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
    const months = [
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
  
    const data_months = {
      labels: months,
      datasets: [{
        label: 'Energy Usage',
        backgroundColor: 'rgb(35, 170, 250)',
        borderColor: 'rgb(35, 170, 250)',
        data: [0, 10, 5, 2, 20, 30, 45, 65, 32, 42, 14, 30],
      }]
    };
  
    const config_month: any = {
      type: 'bar',
      data: data_months,
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

    const years = [
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
  
    const data_years = {
      labels: years,
      datasets: [{
        label: 'Energy Usage',
        backgroundColor: 'rgb(250, 200, 40)',
        borderColor: 'rgb(250, 200, 40)',
        data: [5000, 4500, 3600, 4800, 5200, 3900, 4005, 5500, 6000, 7000, 2500],
      }]
    };
  
    const config_year: any = {
      type: 'bar',
      data: data_years,
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
  
    const myChart = new Chart(<HTMLCanvasElement>document.getElementById('monthlyChart'), config_month);
    const yourChart = new Chart(<HTMLCanvasElement>document.getElementById('yearlyChart'), config_year);
  }
  
}
