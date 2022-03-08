import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //Foundation
    let menubar = document.getElementById("menubar");
    let menubox = document.getElementById("menubox");
    let list = document.getElementById("list");

    let menubarClasses = ['w-full', 'border-solid', 'border-2', 'border-red-600'];
    let menuboxClasses = ['max-w-fit', 'border-solid', 'border-2', 'border-blue-600', 'flex'];
    let listClasses = ['flex'];
    let linkClasses = ['border-solid', 'border-2', 'border-green-600', 'ml-10'];
    
    this.addStyle(menubar, menubarClasses);
    this.addStyle(menubox, menuboxClasses);
    this.addStyle(list, listClasses);

    let links = ['link1', 'link2', 'link3', 'link4'];
    this.generateLinks(links, linkClasses, list);

  }

  //Functions

  
  showMenu() : void{
    
  }
  hideMenu() : void{

  }

  addStyle(div : HTMLElement|null, classlist : string[]) : void{
    for (let i = 0; i < classlist.length; i++) {
      div?.classList.add(classlist[i]);
    }
  }

  generateLinks(links : string[], linkClasses : string[], list : HTMLElement|null) : void{
    for(let i = 0; i < links.length; i++){
      let link = document.createElement('li');
      list?.appendChild(link);
      link.innerHTML = links[i];
      link.id = "link" + i;
      for(let i = 0; i < linkClasses.length; i++){
        this.addStyle(link, linkClasses);
      }
    }
  }
}
