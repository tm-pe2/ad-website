import { Component,  Input, OnInit } from '@angular/core';
import { FieldData, TableRow } from '../ticketing.component';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    
  }

  @Input() data!: FieldData;
  @Input() parent!:TableRow;


  removeModal(){
    this.parent.destroyEditModal();
  }
  //TODO: Implement edit ticket function




}
