import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseJson } from '../../shared/models/response-json';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  response: Observable<ResponseJson> = new Observable<ResponseJson>();
  selectedUser: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  selectUser(user: User): void {
    this.selectedUser = { ...user };
  }

  newUser(): void {
    this.selectedUser = new User();
  }

  userChanged(): void {
    this.getAllUsers();
    this.newUser();
  }

  getAllUsers(): void {
    this.response = this.userService.getAll();
  }

}
