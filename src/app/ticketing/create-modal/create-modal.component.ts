import { Component, Input, OnInit } from '@angular/core';
import { ClientTicketsComponent } from '../client-tickets/client-tickets.component';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {

  @Input() parent!: ClientTicketsComponent;

  constructor() { }

  ngOnInit(): void {
  }

  removeModal(){
    this.parent.destroyCreateModal();
  }
}
