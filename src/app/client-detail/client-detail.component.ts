import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CLIENTS } from '../mock-clients';



@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  
  form!: FormGroup;
  id:number;
  name:string;
  lastname:string;
  type:string;

  constructor(
    private formB: FormBuilder,
    private dialRef: MatDialogRef<ClientDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.id=data.id;
      this.name=data.name;
      this.lastname=data.lastname;
      this.type=data.type;
     }

  ngOnInit() {

  this.form=this.formB.group({
    id:[this.id,[]],
    name:[this.name,[]],
    lastname:[this.lastname,[]],
    type:[this.type,[]],

  })
  }

  updateClient(idToUpd:number) {
    this.dialRef.close(this.form.value);
    console.log(this.form.value);
    console.log(idToUpd);
    
    CLIENTS.forEach((value,index)=>{
      if(value.id==idToUpd) 
      {
        CLIENTS[index].name=this.form.value.name;
        CLIENTS[index].lastname=this.form.value.lastname;
        CLIENTS[index].type=this.form.value.type;
      }
  });


    
  }

  cancel() {
    this.dialRef.close();
}

}

