import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box5',
  templateUrl: './box5.component.html',
  styleUrls: ['./box5.component.css']
})
export class Box5Component implements OnInit {

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
