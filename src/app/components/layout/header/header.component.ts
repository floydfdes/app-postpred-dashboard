import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  items: any;
  ngOnInit(): void {
    this.items = [
      {
        label: 'Posts',
        icon: 'pi pi-fw pi-book',
        command: () => this.onMenuItemClick('Posts'),
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        command: () => this.onMenuItemClick('Users'),
      },
    ];
  }
  onMenuItemClick(item: string) {
    let route = item.toLowerCase();
    this.router.navigate([route]);
  }
}
