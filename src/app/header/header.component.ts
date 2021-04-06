import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { 
    this.items = [];
  }

  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
          label: 'Add',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Actor'},
                      {label: 'Acress'},
                      {label: 'Movie'},
                      {label: 'Web Series'}
                  ]
              },
              {label: 'Quit'}
          ]
      },
      {
          label: 'View',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {label: 'Actor'},
            {label: 'Acress'},
            {label: 'Movie'},
            {label: 'Web Series'}
          ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Actor'},
          {label: 'Acress'},
          {label: 'Movie'},
          {label: 'Web Series'}
        ]
    }
  ];
  }

}
