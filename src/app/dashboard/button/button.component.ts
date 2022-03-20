import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  host: {'[class]': "''"}
})
export class ButtonComponent implements OnInit {
  @Input() type: 'info' | 'warning' | 'error' | 'success' = 'info';
  @Input() href: String = '';

  constructor() { }
  
  ngOnInit(): void {
  }
  
}