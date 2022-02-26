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
    ];
  
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };
  
    const config: any = {
      type: 'line',
      data: data,
      options: {}
    };
  
    const myChart = new Chart(<HTMLCanvasElement>document.getElementById('myChart'), config);
  }

}
