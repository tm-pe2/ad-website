import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})

export class GraphsComponent implements OnInit {

  usage?: Usage;
  txt: String ='';

  constructor() {
  }

  ngOnInit(): void {
    fetch('http://localhost:6060/energyUsage/0')
      .then((res) => res.json())
      .then((usage: Usage) => {
        this.usage = usage;
        this.txt = `Welcome, ${this.usage.client}, ${this.usage.usage}`
      })
      .catch((err) => {
        this.txt = 'Error retrieving user'
        console.error('Error retrieving user', err);
      });
  }
  
}

export interface Usage {
  id: Number,
  client: String,
  usage: Number,
}
