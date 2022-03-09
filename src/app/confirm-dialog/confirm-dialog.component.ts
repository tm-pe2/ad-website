import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientDetailComponent } from '../client-detail/client-detail.component';
import { CLIENTS } from '../mock-clients';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  
  name:string;
  id:number;

  constructor(
    private dialRef: MatDialogRef<ClientDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.name=data.name;
      this.id=data.id;
    }
  

  ngOnInit(): void {
  }

  deleteClient(idToDel: number) {
    console.log(idToDel);
    CLIENTS.forEach((value,index)=>{
      if(value.id==idToDel) CLIENTS.splice(index,1);
      this.dialRef.close();
  });

    
  } 

  cancel() {
    this.dialRef.close();
}
}
