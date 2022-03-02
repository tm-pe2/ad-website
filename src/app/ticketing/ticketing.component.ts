import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';


@Component({
  selector: 'app-ticketing',
  templateUrl: './ticketing.component.html',
  styleUrls: ['./ticketing.component.css'],
})
export class TicketingComponent implements OnInit {
  //dummy data
  fields: Array<FieldData> = [
    { name: 'Dries', issue: 'This is a test issue', description: 'Test issue', id: 0 },
    { name: "Peter", issue: "Laptop start met een groen scherm", description: "Mijn laptop heeft bij het opstarten een groen scherm, en soms start hij helemaal niet op!", id: 1 },
    { name: "Dries", issue: "Windows XP is gehacked en FB is geblokkeerd!", description: "Bij het inloggen op windows XP wordt mijn scherm rood en verschijnt een melding dat ik Bitcoin moet storten op hun adres om toegang te krijgen tot mijn bestanden, hierdoor kan ik niet op Facebook!", id: 2 },
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

  fields: Array<FieldData> = [
    { name: 'Dries', issue: 'This is a test issue', description: 'Test issue', id: 0 },
    { name: "Peter", issue: "Laptop start met een groen scherm", description: "Mijn laptop heeft bij het opstarten een groen scherm, en soms start hij helemaal niet op!", id: 1 },
    { name: "Dries", issue: "Windows XP is gehacked en FB is geblokkeerd!", description: "Bij het inloggen op windows XP wordt mijn scherm rood en verschijnt een melding dat ik Bitcoin moet storten op hun adres om toegang te krijgen tot mijn bestanden, hierdoor kan ik niet op Facebook!", id: 2 },
  ]


  @ViewChild('modal', { read: ViewContainerRef }) entry?: ViewContainerRef;
  ecomponent?: ComponentRef<EditModalComponent>;
  dcomponent?: ComponentRef<DeleteModalComponent>;
  subscribtion: any;
  constructor() { }
  @Input() rows?: Array<FieldData>;
  @Input() header: Boolean = false;




  ngOnDestroy(): void {
    this.ecomponent?.destroy();
    this.dcomponent?.destroy();
  }
  createEditModal(id: number): void {
    this.entry?.clear();
    this.ecomponent = this.entry?.createComponent(EditModalComponent);
    this.ecomponent!.instance.data = this.fields[id];
    this.ecomponent!.instance.parent = this;
  }
  destroyEditModal() {
    this.ecomponent?.destroy();
  }

  createDeleteModal(id: number): void {
    this.entry?.clear();
    this.dcomponent = this.entry?.createComponent(DeleteModalComponent);
    this.dcomponent!.instance.data = this.fields.find(x => x.id === id) || this.fields[0];
    this.dcomponent!.instance.parent = this;

  }
  destroyDeleteModal() {
    this.dcomponent?.destroy();
  }

  limitDescription(description: String) {
    if (description.length > 150) {
      return description.substring(0, 150) + "...";
    }
    return description;
  }
}

export interface FieldData {
  name: String;
  issue: String;
  description: String;
  id?: number;
}