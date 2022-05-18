import { Component, Input, OnInit } from '@angular/core';
import { Graph } from 'src/app/interfaces/graph.interface';

@Component({
  selector: 'app-medium-graph',
  templateUrl: './medium-graph.component.html',
  styleUrls: ['./medium-graph.component.css']
})
export class MediumGraphComponent implements OnInit {
  @Input() graph: Graph = {
    title: '',
    description: '',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
