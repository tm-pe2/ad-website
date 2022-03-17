import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box4',
  templateUrl: './box4.component.html',
  styleUrls: ['./box4.component.css']
})
export class Box4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() : void{
    console.log("cancel clicked");
  }
  onClick2() : void{
    console.log("ok clicked");
  }
}
