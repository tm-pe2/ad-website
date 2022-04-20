import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ClientTicketsComponent } from '../client-tickets/client-tickets.component';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {

  @Input() parent!: ClientTicketsComponent;
  @ViewChild('issue', { read: ElementRef }) issue?: ElementRef;
  @ViewChild('description', { read: ElementRef }) description?: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  removeModal(){
    this.parent.destroyCreateModal();
  }
  confirmModal(){
    this.parent.createTicket( this.issue?.nativeElement.value , this.description?.nativeElement.value);
  }
}
