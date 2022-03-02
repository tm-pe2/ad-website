import { Component, Input, OnInit } from '@angular/core';
import { FieldData } from '../ticketing.component';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
  host: {class: "hidden"},
})
export class EditModalComponent implements OnInit {

  constructor() { }

  @Input() data!: FieldData;
  @Input() id!: string;
  ngOnInit(): void {

  }
  confirmDelete(id: string){
    document.getElementById(id)!.style.display = "none";

  }
  closeModal(id: string){
    document.getElementById(id)!.style.display = "none";
  }
}
