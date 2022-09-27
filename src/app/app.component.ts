import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: any;

  ngOnInit() {
    this.items = [
      {
        label: 'Posts',
        icon: 'pi pi-fw pi-book',
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
      },
    ];
  }
}
