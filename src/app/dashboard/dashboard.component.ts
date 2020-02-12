import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  items = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: ['/home/classification'],
    },
    {
      title: 'Account',
      link: [],
      icon: 'layers-outline',
    },
    {
      title: 'Profile',
      link: [],
      icon: 'person-outline',
    },
    {
      title: 'logout',
      link: [],
      icon: 'lock-outline',
    },
  ];

  ngOnInit() {
  }

}
