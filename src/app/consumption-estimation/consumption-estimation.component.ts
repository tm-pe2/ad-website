import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder, FormArray } from '@angular/forms'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { environment } from 'src/environments/environment';
import { CustomerComponent } from '../customers/customers.component';
import { Customer ,EstimatedContract,Estimation, Meter,User} from '../interfaces/customer';
import { UserdataService } from '../services/userdata.service';
import {PostConfigService} from '../services/post-config.service'
import { Address } from '../interfaces/customer';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConstantPool } from '@angular/compiler';


@Component({
  selector: 'app-consumption-estimation',
  templateUrl: './consumption-estimation.component.html',
  styleUrls: ['./consumption-estimation.component.css']
})
export class ConsumptionEstimationComponent implements OnInit {

  serviceChoiceForm!:FormGroup;
  familyAdressCompoundForm!: FormGroup;
  consumptionDetailsForm!: FormGroup;
  meterTypeForm!:FormGroup;
  
  service_step = false;
  familyAdress_step = false;
  meterType_step=false;
  consumption_step = false;
  step = 1;
  
  customerData: Customer[]=[] ;  
  fullAddresses: Address[]=[];

  selectedAddressID:number=-1;
  selectedMeterNr:number=1;
  answerRadio:number=0;
  loggedInUser!: User;

  //received from the post req
  contract_id:number=0;

  meters: Meter[]=[];
  contract: EstimatedContract=
  {
      start_date: new Date(),
      end_date: new Date(),
      customer_type: '',
      tariff_id: -1 ,
      estimation_id:-1,
      address_id:-1,
      service_type:-1,
      status:"inactive",
      building_type: -1,
      family_size: -1 ,
      equipments: '',
      past_consumption: -1,
      estimated_consumption:-1
  
  };

  estimation:number=0;
  annualEstimation:number=0;
  annualCustomerInput:number=0;
  past_consumtionV:number=0;

  equipments: Array<any> = [
    { name: 'Oven/Stove', value: '1' },
    { name: 'Dishwasher', value: '2' },
    { name: 'Washing Machine', value: '3' },
    { name: 'Drying Machine', value: '4' },
    { name: 'Hair Dryer', value: '5' }
  ];

  constructor(
    private formBuilder: FormBuilder,
              private httpClient:HttpClient,
              private customer_user: UserdataService,
              private postService: PostConfigService,
              public dialog: MatDialog) {
                this.onGetCustomers();
              }

  ngOnInit() 
  {
    this.serviceChoiceForm = this.formBuilder.group({
      service_type: new FormControl('', Validators.required),
      
    });
    this.familyAdressCompoundForm = this.formBuilder.group({
        address_id: new FormControl('', Validators.required),
        family_size: new FormControl('',Validators.required),
        building_type: new FormControl('',Validators.required)
    });
    this.meterTypeForm = this.formBuilder.group({
      metersNumber: new FormControl(['' , Validators.required]),
      type: new FormControl('',Validators.required),
      value: new FormControl('',Validators.required),
      type2: new FormControl(''),
      value2: new FormControl(''),
      type3: new FormControl(''),
      value3: new FormControl('')
    });
    this.consumptionDetailsForm = this.formBuilder.group({
        answer: new FormControl(''),
        annualConsumption: new FormControl(''),
        equipments : new FormArray([])
    });

     this.onGetCustomers();
    
  }
  get service() { return this.serviceChoiceForm.controls; }
  get familyAddress() { return this.familyAdressCompoundForm.controls; }
  get meterType() {return this.meterTypeForm.controls;}
  get consumption() { return this.consumptionDetailsForm.controls; }

  onCheckboxChange(event: any) {
    const selectedEquipments = (this.consumption['equipments'] as FormArray);
    if (event.target.checked) {
      selectedEquipments.push(new FormControl(event.target.value));
    } else {
      const index = selectedEquipments.controls.findIndex(x => x.value === event.target.value);
      selectedEquipments.removeAt(index);
    }
  }
  
  

  async onGetCustomers()
  {
    await this.customer_user.loadUser();
    this.postService.getCustomers(this.customer_user.user.id!).subscribe(
      (response) =>{
        this.customerData=response.customer;
        this.customerData.forEach((add) => {
        let a:Address=
        {
          address_id : add.address_id,
          street : add.street,
          house_number : add.house_number,
          city : add.city,
          postal_code : add.postal_code,
          country : add.country
        }
        this.fullAddresses.push(a);
        });
      },
      (error)=>console.log('error: ',error),
      ()=> console.log('ready!')
    );    
    
  }

next()
{
  if(this.step==1)
  {
    this.service_step=true;
    if(this.serviceChoiceForm.invalid){return}
    this.step++;
  }
  if(this.step==2)
  {
    this.familyAdress_step=true;
    if(this.familyAdressCompoundForm.invalid)
    {
      console.error();
      return
    } 
    this.step++;
   
  }
  if(this.step==3)
  {
    this.meterType_step=true;
    if(this.meterTypeForm.invalid)
    {
      console.error();
      return
    }
    this.step++;
   
  }
}
previous()
{
  this.step--;
 
  if(this.step==1)
  {
    this.service_step=false;
   
  }
  if(this.step==2)
  {
    this.familyAdress_step=false;
   
  }
  if(this.step==3)
  {
    this.meterType_step=false;
   
  }
  if(this.step==4)
  {
    this.consumption_step =false;
   
  }
  
}
calculateConsumption()
{
  switch(this.familyAdressCompoundForm.value.family_size)
  {
    
    //daily electricity consumption in kWh of 'x' person(s) in an apartment:
    case "1":
      {
        this.estimation+=18;
        
        break;
      }
    case "2":
      {
        this.estimation+=28;
        break;
      }
    case "3":
      {
        this.estimation+=40;
        break;
      }
    case "4":
      {
        this.estimation+=60;
        break;
      }
  }
  
  //electricity consumption is adjusted depending on building type. e.g: closed house can get warmer easier than an open building, etc:
  
  switch(this.familyAdressCompoundForm.value.building_type)
  {
    case "1":
      {
        this.estimation-=5;
        break;
      }
    case "2":
      {
        this.estimation-=2;
        break;
      }
    case "3":
      {
        this.estimation+=5;
        break;
      }

  }
  
  let appliances: [number]=(this.consumptionDetailsForm.get('equipments')?.value);
  //the amount of kWh consumed in a day from an appliance is added to the estimated consumption
  appliances.forEach(app => {
    if(app==1)
    {this.estimation+=1}
    if(app==2)
    {this.estimation+=0.20}
    if(app==3)
    {this.estimation+=0.36}
    if(app==4)
    {this.estimation+=0.30}
    if(app==5)
    {this.estimation+=1.07}
  });
  
  return this.estimation;
}

submit()
{
  if(this.step==4)
  {
    this.consumption_step=true;
    if(this.consumptionDetailsForm.invalid)
    {
      console.error();
    return
    }
    
    this.annualEstimation=this.calculateConsumption();
    this.annualEstimation=this.annualEstimation*365;
    const meters_numberV=this.meterTypeForm.value.metersNumber;
   
    if(meters_numberV==1)
    {
        let m:Meter ={
          date:new Date(),
          meter_id:0,
          contract_id:this.contract_id,
          index_id:0,
          physical_id:'000',
          meter_type:this.meterTypeForm.value.type,
          index_value:Number(this.meterTypeForm.value.value),
          }
        this.meters.push(m);
    }
    else if(meters_numberV == 2)
      {
        let m:Meter ={
          meter_id:0,
          contract_id:this.contract_id,
          index_id:0,
          physical_id:'000',
          meter_type:this.meterTypeForm.value.type,
          index_value:Number(this.meterTypeForm.value.value),
          date:new Date()
          }
        this.meters.push(m);

        let m2:Meter ={
          meter_id:0,
          contract_id:this.contract_id,
          index_id:0,
          physical_id:'000',
          meter_type:this.meterTypeForm.value.type2,
          index_value:Number(this.meterTypeForm.value.value2),
          date:new Date()
          }
        this.meters.push(m2);
      }
      else if(meters_numberV==3)
      {
        let m:Meter ={
          meter_id:0,
          contract_id:this.contract_id,
          index_id:0,
          physical_id:'000',
          meter_type:this.meterTypeForm.value.type,
          index_value:Number(this.meterTypeForm.value.value),
          date:new Date()
          }
        this.meters.push(m);

        let m2:Meter ={
          meter_id:0,
          contract_id:this.contract_id,
          index_id:0,
          physical_id:'000',
          meter_type:this.meterTypeForm.value.type2,
          index_value:Number(this.meterTypeForm.value.value2),
          date:new Date()
          }
        this.meters.push(m2);
        
        let m3:Meter ={
          meter_id:0,
          contract_id:this.contract_id,
          index_id:0,
          physical_id:'000',
          meter_type:this.meterTypeForm.value.type3,
          index_value:Number(this.meterTypeForm.value.value3),
          date:new Date()
          }
        this.meters.push(m3);
      } 
    }

    const equipmentListV=this.consumptionDetailsForm.value.equipments;
    const eqListString=equipmentListV.toString();

    if (this.consumptionDetailsForm.value.answer==1)
    {   
        this.annualCustomerInput=this.consumptionDetailsForm.value.annualConsumption;
        if(this.annualCustomerInput < this.annualEstimation)
        {
          this.past_consumtionV=this.annualEstimation;
        }
        else 
        {
           this.past_consumtionV=this.annualCustomerInput;
        }
    }
    
  
  
    this.contract={
      start_date: new Date(),
      end_date: new Date(),
      customer_type: "Private",
      tariff_id: 1 ,
      estimation_id:0,
      address_id: Number(this.familyAdressCompoundForm.value.address_id),
      service_type:Number(this.serviceChoiceForm.value.service_type),
      status:"inactive",
      building_type: Number(this.familyAdressCompoundForm.value.building_type),
      family_size: Number(this.familyAdressCompoundForm.value.family_size),
      equipments: eqListString,
      past_consumption: Number(this.past_consumtionV),
      estimated_consumption:1
    }

    console.log(this.contract);
    
  this.onAddContract().then((res) => {
    this.alterContractID(res);
    this.onAddMeters();
    this.openDialog();
  })  
  
}

   onAddContract(): Promise<number>
    {
      return new Promise<number>((resolve,reject) => {
        this.postService.addContract(this.contract).subscribe(
         (response: any)=>{
           console.log('Contract inserted!');
           resolve(response.contract_id);
         },
         (error: any)=>console.log('error:',error)
        );
      })
    }
  
    alterContractID(id: number)
    {
      this.meters.forEach(meter => {
        meter.contract_id = id;
      });
    }

    onAddMeters()
    {
      this.meters.forEach(meter =>
        {
          this.postService.addMeters(meter).subscribe(
            (response: any)=>{
              console.log('Meter inserted');
            },
            (error: any)=>console.log('error:',error)
          )
        });
    }
    openDialog()
    {
        const dialogRef = this.dialog.open(SubmitEstimationDialogComponent, {
          width: '250px',
          data: {estimationFromApi: this.annualEstimation},
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
    }
} 

@Component({
  selector: 'submit-estimation-dialog',
  templateUrl: 'submit-estimation-dialog.html',
})
export class SubmitEstimationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SubmitEstimationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
}


export interface DialogData
{
estimationFromApi:number;
}