import { Component, OnInit } from '@angular/core';
import { Client } from '../clients/client';
import{CLIENTS} from '../mock-clients'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ClientDetailComponent } from '../client-detail/client-detail.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AddClientDialogComponent } from '../add-client-dialog/add-client-dialog.component';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']

})
export class ClientsComponent implements OnInit {
 
  constructor(public dialog : MatDialog){}
  
  clientsArray=CLIENTS;
  selectedClient? : Client;
  
   onSelectEdit(client:Client)
  {  
    this.selectedClient=client;
    const dialConfig=new MatDialogConfig();
    dialConfig.disableClose = true;
    dialConfig.autoFocus = true;

    dialConfig.data={
      id:this.selectedClient.id,
      name: this.selectedClient.name, 
      lastname: this.selectedClient.lastname, 
      type: this.selectedClient.type, 
      contractNr: this.selectedClient.contractNr
    }
    //open dialog with selected client's data
    let dialRef=this.dialog.open(ClientDetailComponent,dialConfig);
   
    // differ which button was pressed (true -> update | false -> cancel)
    dialRef.afterClosed().subscribe(result =>{
      console.log(`Action was: ${result}`);
    });

  } 
 
  onSelectRemove(client:Client):void {
    this.selectedClient = client;  
    
    const dialConfig = new MatDialogConfig();
    
    dialConfig.disableClose = true;
    dialConfig.autoFocus = true;

    dialConfig.data = {
      name: this.selectedClient.name,
      id: this.selectedClient.id
    }
    //open dialog with selected client's data
    let dialRef=this.dialog.open(ConfirmDialogComponent,dialConfig);
   
    // differ which button was pressed (true -> update | false -> cancel)
    dialRef.afterClosed().subscribe(result => {
      console.log(`Action was: ${result}`);
    });


  }
  
  onSelectAdd():void{
    const dialConfig=new MatDialogConfig();
    dialConfig.disableClose = true;
    dialConfig.autoFocus = true;
    let dialRef=this.dialog.open(AddClientDialogComponent)
  }
  //constructor() { }
  ngOnInit(): void {
  }

}




