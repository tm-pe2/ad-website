import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  host: {'[class]': "'mt-4 px-3 py-2'"}
})
export class ButtonComponent implements OnInit {
  @Input() type: 'info' | 'warning' | 'error' | 'success' = 'info';
  @Input() href: String = '';

  constructor() { }
  
  ngOnInit(): void {
  }
  
}