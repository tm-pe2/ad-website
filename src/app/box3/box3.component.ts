import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box3',
  templateUrl: './box3.component.html',
  styleUrls: ['./box3.component.css']
})
export class Box3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() : void{
    console.log("ok clicked");
  }
}
