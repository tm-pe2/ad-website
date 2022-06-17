import { Component, OnInit, Input} from '@angular/core';
import { WorkerappComponent } from '../workerapp.component';
import { WorkerAppService } from 'src/app/services/worker-app.service';
import { MeterAppForm } from 'src/app/interfaces/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cient-page',
  templateUrl: './cient-page.component.html',
  styleUrls: ['./cient-page.component.css']
})

export class CientPageComponent implements OnInit {
  @Input() parent ?: WorkerappComponent;



  constructor(public service: WorkerAppService, private router: Router) 
  { }
  
  ngOnInit(): void{
    
   }

  displayAddress(): string
  { return (this.service.planningItem?.user.address.street + ' ' + this.service.planningItem?.user.address.house_number + ', ' + this.service.planningItem?.user.address.postal_code + ' ' + this.service.planningItem?.user.address.city_name + ', ' + this.service.planningItem?.user.address.country); }

  displayName(): string
  {
    return (this.service.planningItem?.user.first_name + ' ' + this.service.planningItem?.user.last_name);
  }

  submit(form: MeterAppForm): void
  { 
    this.service.submitted = true;
    this.service.postNewConsumtions(form);
    this.router.navigateByUrl("/workerapp");

  }

}