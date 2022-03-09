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
  
    const data_months = {
      labels: months,
      datasets: [{
        label: 'Energy Usage',
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 255, 0)'],
        borderColor: 'rgb(255, 99, 132)',
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
      2000,
      2001, 
      2002,
      2003,
      2004,
      2005,
      2006,
      2007,
      2008,
      2009,
      2010,
    ];
  
    const data_years = {
      labels: years,
      datasets: [{
        label: 'Energy Usage',
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 255, 0)'],
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45, 65, 32, 42],
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
