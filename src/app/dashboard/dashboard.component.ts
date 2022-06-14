import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/User';
import { UserRole } from '../interfaces/User';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  title: string = 'Dashboard'
  employeeRoles: UserRole[] = [UserRole.ACCOUNTANT,UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.HR_MANAGER, UserRole.MANAGER, UserRole.SUPPORT, UserRole.TECHNICIAN];

  constructor(private titleService: Title, private activatedRoute:ActivatedRoute, private elementRef: ElementRef, public auth: AuthService) {
  }

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard');

  }

  public get UserRole(){
    return UserRole;
  }
}
