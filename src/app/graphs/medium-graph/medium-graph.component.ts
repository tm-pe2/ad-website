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
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8k01sqpEr5vmb5UafKSKq5HCZGUUgEZsd6w&usqp=CAU'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
