import { Component, Input, OnInit } from '@angular/core';
import { Graph } from 'src/app/interfaces/graph.interface';

@Component({
  selector: 'app-big-graph',
  templateUrl: './big-graph.component.html',
  styleUrls: ['./big-graph.component.css']
})
export class BigGraphComponent implements OnInit {
  @Input() graph: Graph = {
    title: '',
    description: '',
    imageUrl: 'https://chartio.com/assets/12c091/tutorials/charts/line-charts/3d65abd1a3336e11e14ccac5cd8cbff37c274e9c734cfd190c2bc6ac39072199/line-chart-bestpractices-2a.png'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
