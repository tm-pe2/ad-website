import { Component, Input, OnInit } from '@angular/core';
import { Graph } from 'src/app/interfaces/graph.interface';

@Component({
  selector: 'app-small-graph',
  templateUrl: './small-graph.component.html',
  styleUrls: ['./small-graph.component.css']
})
export class SmallGraphComponent implements OnInit {
  @Input() graph: Graph = {
    title: '',
    description: '',
    imageUrl: 'https://images.nagwa.com/figures/explainers/245194820905/9.svg'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
