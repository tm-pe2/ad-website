import { Component, Input, OnInit } from '@angular/core';
import { ManageTickets } from '../manage-tickets/manage-tickets.component';
import { FieldData } from '../ticketing.component';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent implements OnInit {

  constructor() { }

  @Input() data!: FieldData;
  @Input() parent!: ManageTickets;

  ngOnInit(): void {
  }
  removeModal(){
    //TODO: implement delete ticket function
    this.parent.destroyDeleteModal();
  }


}
