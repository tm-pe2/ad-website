import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
  host: {'[class]': "'w-full lg:w-2/3 p-5 h-[32rem]'"}
})
export class BigCardComponent implements OnInit {

  @Input() title: string = 'Default title';
  @Input() icon: string = 'input';
  @Input() buttonIcon: string = '';
  @Input() buttonTitle: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
