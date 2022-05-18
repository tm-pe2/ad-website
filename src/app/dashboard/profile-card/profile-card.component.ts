import { Component, Input, OnInit } from '@angular/core';
import { User, UserRole } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserdataService } from 'src/app/services/userdata.service';
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
  host: {'[class]': "'w-full lg:w-1/3 p-5 h-[32rem]'"}
})
export class ProfileCardComponent implements OnInit {
  employeeRoles: UserRole[] = [UserRole.ACCOUNTANT,UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.HR_MANAGER, UserRole.MANAGER, UserRole.SUPPORT, UserRole.TECHNICIAN];

  @Input() title: string = 'Your profile';
  constructor(public userdata: UserdataService, public auth: AuthService) {
    this.load();

   }

   ngOnInit(): void {
  }

  async load(){

    await this.userdata.loadUser();

  }


  public get UserRole(){
    return UserRole;
  }

}
