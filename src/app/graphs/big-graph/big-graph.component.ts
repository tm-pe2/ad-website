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
  }
  constructor() { }

  ngOnInit(): void {
  }

}
