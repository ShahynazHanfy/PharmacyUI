import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  items: MenuItem[];

  ngOnInit() {
  this.items = [
    {
        
        label:'Home',
        icon:'pi pi-home',
        // url: ['/h']
        routerLink: ['/showdrug'],
        // routerLinkActiveOptions: {
        //   exact: true
        // }
       
    },
    {
        label:'Drug Mangement',
        icon:"pi pi-filter",
        items:[
            {
                
                label:'Drug',
                icon:'pi pi-fw pi-align-left',
                routerLink: ['/showdrug'],


            },
            {
                
                label:'Category',
                icon:'pi pi-fw pi-align-left',
                routerLink: ['/showCategories'],

            },
            {
                label:'SubCategory',
                icon:'pi pi-fw pi-align-right'
            },
            {
                label:'Form',
                icon:'pi pi-fw pi-align-center'
            },
            {
                label:'Firm',
                icon:'pi pi-fw pi-align-justify'
            },
            {
              label:'Supplier',
              icon:'pi pi-fw pi-align-justify'
          }

        ]
    },
    {
        label:'Medicine Tips',
        icon:'pi pi-chart-bar',
        items:[
            {
                label:'New',
                icon:'pi pi-fw pi-user-plus',

            },
            {
                label:'Delete',
                icon:'pi pi-fw pi-user-minus',

            },
            {
                label:'Search',
                icon:'pi pi-fw pi-users',
                items:[
                {
                    label:'Filter',
                    icon:'pi pi-fw pi-filter',
                    items:[
                        {
                            label:'Print',
                            icon:'pi pi-fw pi-print'
                        }
                    ]
                },
                {
                    icon:'pi pi-fw pi-bars',
                    label:'List'
                }
                ]
            }
        ]
    },
    
    {
        label:'Quit',
        icon:'pi pi-fw pi-power-off'
    }
];

  }
}
