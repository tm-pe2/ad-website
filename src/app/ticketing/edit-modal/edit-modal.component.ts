import { Component,  Input, OnInit } from '@angular/core';
import { ManageTickets } from '../manage-tickets/manage-tickets.component';
import { FieldData } from '../manage-tickets/manage-tickets.component';

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
  @Input() parent!:ManageTickets;


  removeModal(){
    this.parent.destroyEditModal();
  }
  //TODO: Implement edit ticket function




}
