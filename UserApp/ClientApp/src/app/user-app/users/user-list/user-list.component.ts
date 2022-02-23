import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  selectedUser: User = new User();

  constructor(private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    await this.getAllUsers();
  }

  selectUser(user: User): void {
    this.selectedUser = { ...user };
  }

  newUser(): void {
    this.selectedUser = new User();
  }

  async userChanged(): Promise<void> {
    await this.getAllUsers();
    this.newUser();
  }

  async getAllUsers(): Promise<void> {
    this.users = await this.userService.getAll();
  }

}
