import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
  host: {'[class]': "'w-full lg:w-1/3 p-5 h-[32rem]'"}
})
export class ProfileCardComponent implements OnInit {

  @Input() user?: User
  @Input() title: string = 'Your profile';

  constructor() { }

  ngOnInit(): void {
  }
}
