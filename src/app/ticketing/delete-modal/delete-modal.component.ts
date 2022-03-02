import { Component, Input, OnInit } from '@angular/core';
import { FieldData } from '../ticketing.component';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
  host: {class: "hidden"},
})
export class DeleteModalComponent implements OnInit {

  constructor() { }

  @Input() id!: string;
  @Input() data!: FieldData;

  ngOnInit(): void {
  }
  confirmDelete(id: string){
    
    document.getElementById(id)!.style.display = "none";

  }
  closeModal(id: string){
    document.getElementById(id)!.style.display = "none";

  }
}
