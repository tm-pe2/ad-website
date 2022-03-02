import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticketing',
  templateUrl: './ticketing.component.html',
  styleUrls: ['./ticketing.component.css'],
})
export class TicketingComponent implements OnInit {
  //dummy data
  fields: Array<FieldData> = [
   {name: 'Dries', issue: 'This is a test issue', description: 'Test issue' , id:0},
   {name: "Peter", issue: "Laptop start met een groen scherm", description: "Mijn laptop heeft bij het opstarten een groen scherm, en soms start hij helemaal niet op!", id:1},
   {name: "Dries", issue: "Windows XP is gehacked en FB is geblokkeerd!", description: "Bij het inloggen op windows XP wordt mijn scherm rood en verschijnt een melding dat ik Bitcoin moet storten op hun adres om toegang te krijgen tot mijn bestanden, hierdoor kan ik niet op Facebook!", id:2}, 
  ]

  constructor() { 
  }

  ngOnInit(): void {


  }

}

@Component({
  selector: 'table-row',
  templateUrl: './tablerow.component.html',
})

export class TableRow {

  constructor() {}
  @Input() rows?: Array<FieldData>;
  @Input() header: Boolean = false;

  showModal(id:string) {
      console.log(id)
      document.getElementById(id)!.style.display = "block";
      document.getElementById(id)!.style.display = "block";

  }
  limitDescription(description: String) {
    if (description.length > 150) {
      return description.substring(0, 150) + "...";
    }
    return description;
  }
}

export interface FieldData{
  name: String;
  issue: String;
  description: String;
  id?: Number;
}