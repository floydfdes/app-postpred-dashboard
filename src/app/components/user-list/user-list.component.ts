import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Users } from 'src/app/interfaces/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private api: ApiService) {}
  users: Users[] = [];
  ngOnInit(): void {
    this.api.getAllUsers().subscribe((res: any) => {
      this.users = res;
    });
  }
  editUser(user: Users) {
    console.log(user);
  }
  deleteUser(user: Users) {
    console.log(user);
  }
}
