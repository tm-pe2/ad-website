import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CreateModalComponent } from '../create-modal/create-modal.component';

@Component({
  selector: 'client-tickets',
  templateUrl: './client-tickets.component.html',
  styleUrls: ['./client-tickets.component.css']
})
export class ClientTicketsComponent implements OnInit {

  @ViewChild('modal', { read: ViewContainerRef }) entry?: ViewContainerRef;
  createModal?: ComponentRef<CreateModalComponent>;
  constructor() { }

  ngOnInit(): void {
  }

  createCreateModal(): void {
    this.entry?.clear();
    this.createModal = this.entry?.createComponent(CreateModalComponent);
    this.createModal!.instance.parent = this;
  }
  destroyCreateModal() {
    this.createModal?.destroy();
  }
}
