import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder, FormArray } from '@angular/forms'


@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  serviceChoiceForm!:FormGroup;
  familyAdressCompoundForm!: FormGroup;
  consumptionDetailsForm!: FormGroup;
  meterTypeForm!:FormGroup;
  service_step = false;
  familyAdress_step = false;
  meterType_step=false;
  consumption_step = false;
  
  step = 1;
  selectedMeterNr=1;
  estimation!:number;
  equipments: Array<any> = [
    { name: 'Oven/Stove', value: '1' },
    { name: 'Dishwasher', value: '2' },
    { name: 'Washing Machine', value: '3' },
    { name: 'Drying Machine', value: '4' },
    { name: 'Hair Dryer', value: '5' }
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() 
  {
    this.serviceChoiceForm = this.formBuilder.group({
      choice:['', Validators.required],
      
    });
    this.familyAdressCompoundForm = this.formBuilder.group({
        city: ['', Validators.required],
        postcode: ['',Validators.required],
        members: ['',Validators.required],
        houseType: ['',Validators.required]
    });
    this.meterTypeForm = this.formBuilder.group({
      metersNumber: ['', Validators.required],
      meterTypes: [[],Validators.required],
      metersValue:[[],Validators.required]
    });
    this.consumptionDetailsForm = this.formBuilder.group({
        yearlyConsumption: ['',Validators.required],
        selectedEquipments : new FormArray([])
    });
  }
  get service() { return this.serviceChoiceForm.controls; }
  get familyAddress() { return this.familyAdressCompoundForm.controls; }
  get meterType() {return this.meterTypeForm.controls;}
  get consumption() { return this.consumptionDetailsForm.controls; }

  onCheckboxChange(event: any) {
    const selectedEquipments = (this.consumption['selectedEquipments'] as FormArray);
    if (event.target.checked) {
      selectedEquipments.push(new FormControl(event.target.value));
    } else {
      const index = selectedEquipments.controls.findIndex(x => x.value === event.target.value);
      selectedEquipments.removeAt(index);
    }
  }


next()
{
  if(this.step==1)
  {
    this.service_step=true;
    if(this.serviceChoiceForm.invalid){return}
    this.step++;
    console.log(this.step);
  }
  if(this.step==2)
  {
    console.log(this.step);
    this.familyAdress_step=true;
    if(this.familyAdressCompoundForm.invalid)
    {
      console.error();
      return
    }
    this.step++;
    console.log(this.step);
  }
  if(this.step==3)
  {
    console.log(this.step);
    this.meterType_step=true;
    if(this.meterTypeForm.invalid)
    {
      console.error();
      return
    }
    this.step++;
    console.log(this.step);
  }
}
previous()
{
  this.step--;
  console.log(this.step);
  if(this.step==1)
  {
    this.service_step=false;
    console.log(this.step);
  }
  if(this.step==2)
  {
    this.familyAdress_step=false;
    console.log(this.step);
  }
  if(this.step==3)
  {
    this.meterType_step=false;
    console.log(this.step);
  }
  
}

calculateConsumtion():number 
{
  let estimation:number=0;
  let nrOfPeople : number = this.familyAdressCompoundForm.get('members')?.value;
  console.log("ppl",nrOfPeople);
  if(nrOfPeople==1){
      estimation=18;
  }
  else if(nrOfPeople==2)
  {
    estimation=28;
  }
  else if(nrOfPeople==3) 
  { 
    estimation=40;
  }
  else
  {
  estimation=60;}
     
  console.log("est",estimation);
  
  let building : number = this.familyAdressCompoundForm.get('houseType')?.value;
  console.log("bTy",building);
  if(building==1){
    estimation-=5;
  }
  else if(building==2)
  {
    estimation-=2;
  }
  else if(building==3) 
  { 
    estimation+=5;
  }

  console.log("est",estimation);

  let appliances: [number]=(this.consumptionDetailsForm.get('selectedEquipments')?.value);
  console.log(appliances);
  appliances.forEach(app => {
    if(app==1)
    {estimation+=1}
    if(app==2)
    {estimation+=0.20}
    if(app==3)
    {estimation+=0.36}
    if(app==4)
    {estimation+=0.30}
    if(app==5)
    {estimation+=1.07}
  });
  console.log(estimation);

  
  return estimation;
}

submit()
{
  if(this.step==4)
  {
    this.consumption_step=true;
    if(this.consumptionDetailsForm.invalid)
    {
    console.log("error");
    console.error();
    return
    }
    this.estimation=this.calculateConsumtion();
    let monthlyEst:number= this.estimation*30;
    let annual:number=this.estimation*365;
    console.log(this.serviceChoiceForm.value,this.familyAdressCompoundForm.value,this.meterTypeForm.value,this.consumptionDetailsForm.value);
    

  }
}
}

