import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-suplier',
  templateUrl: './add-suplier.component.html',
  styleUrls: ['./add-suplier.component.css']
})
export class AddSuplierComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  backToHub(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }
}

