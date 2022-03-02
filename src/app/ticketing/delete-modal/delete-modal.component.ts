import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  confirmDelete(){
    document.getElementById("my-modal")!.style.display = "none";
  }
}
