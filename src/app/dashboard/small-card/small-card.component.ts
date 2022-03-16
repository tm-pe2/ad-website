import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
  host: {'[class]': "'w-full lg:w-1/3 p-5'"}
})
export class SmallCardComponent implements OnInit {
  @Input() title: string = "Test!"
  
  @Input() href: string = '/'

  constructor() { }
  
  ngOnInit(): void {

  }

}
