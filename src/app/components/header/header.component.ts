import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor(private router: Router) {

  }
  afficher(){
    console.log(this.items)
  }
  items: MenuItem[] = [];

    ngOnInit() {
        this.items = [

            {
                routerLink:'/home',
                label: 'Home',
                icon: 'pi pi-fw pi-home',

            },
            {
                routerLink:'about',
                label: 'About',
                icon: 'pi pi-fw pi-info',


            },
            {
                routerLink:'/articles',
                label: 'Articles',
                icon: 'pi pi-fw pi-book',


            },
            {
                routerLink:'liens',
                label: 'Liens',
                icon: 'pi pi-fw pi-link',


            },
            {
                separator: true
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];

    }
}



