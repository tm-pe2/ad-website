import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'graph',
  template: `
    <canvas #canvas></canvas>
  `
})
export class GraphCanvasComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: any;
  constructor(){
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    // Dummy graph
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
  
    const config_month: any = {
      type: 'bar',
      data: {
        labels: months,
        datasets: [{
          label: 'Energy Usage',
          backgroundColor: 'rgb(35, 170, 250)',
          borderColor: 'rgb(35, 170, 250)',
          data: [0, 10, 5, 2, 20, 30, 45, 65, 32, 42, 14, 30],
        }]
      },
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

    const chart = new Chart(this.canvas.nativeElement, config_month);
  }
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  user?: User
  tickets: Ticket[] = [];
  title: string = 'Dashboard'
  @ViewChild('monthlyChart') chartRef: any;

  constructor(private titleService: Title, private activatedRoute:ActivatedRoute, private elementRef: ElementRef) {
  }
  ngAfterViewInit(): void {
    console.log(this.chartRef);
  }

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard');

    // For dummy testing
    fetch('http://localhost:6060/dashboard/user/' + Number(this.activatedRoute.snapshot.paramMap.getAll("userType")))
      .then((res) => res.json())
      .then((user: User) => {
        this.user = user;
        this.title = `Welcome, ${this.user.name}`
      })
      .catch((err) => {
        this.title = 'Error retrieving user'
        console.error('Error retrieving user', err);
      });

    fetch('http://localhost:6060/tickets')
      .then((res) => res.json())
      .then((data) => {
        this.tickets = data.tickets;
      })
      .catch((err) => {
        console.error('Error retrieving tickets', err);
      });
  }
}

export interface User {
  id: Number,
  name: String,
  email: String,
  phone: String,
  address: String,
  birthday: String,
  pfpsrc: String,
  type: String
}

interface Ticket{
  name: String;
  issue: String;
  description: String;
  id?: number;
  status?: String;
}