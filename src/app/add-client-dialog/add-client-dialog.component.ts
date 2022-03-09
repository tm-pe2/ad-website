import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientDetailComponent } from '../client-detail/client-detail.component';
import { CLIENTS } from '../mock-clients';
import { Client } from '../clients/client';

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.css']
})
export class AddClientDialogComponent implements OnInit {
  
  form!: Form;
  
  
  constructor(private formB: FormBuilder,
    private dialRef: MatDialogRef<ClientDetailComponent> ){}

  ngOnInit(): void {
 
  }  


  cancel() {
    this.dialRef.close();
  }

  addClient(n:string,ln:string,t:string)
  {
    this.dialRef.close(this.form);
    console.log(this.form);
    console.log(CLIENTS.length);
    var newId= (CLIENTS.length)+1;
    let c: Client = {
      id: newId,
      name: n,
      lastname: ln,
      type: t,
      contractNr: "A10"
    }
    CLIENTS.push(c);
  }
}
