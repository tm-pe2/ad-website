import { Component, Input, OnInit } from '@angular/core';
import { FieldData, TableRow } from '../ticketing.component';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent implements OnInit {

  constructor() { }

  @Input() data!: FieldData;
  @Input() parent!: TableRow;

  ngOnInit(): void {
  }
  removeModal(){
   this.parent.destroyDeleteModal();
  }


}
