import { Component, OnInit } from '@angular/core';
import { UserGroup } from '../../shared/models/user-group';
import { UserGroupService } from '../../shared/services/user-group.service';

@Component({
  selector: 'app-user-group-list',
  templateUrl: './user-group-list.component.html',
  styleUrls: ['./user-group-list.component.css']
})
export class UserGroupListComponent implements OnInit {

  userGroups: UserGroup[] = [];
  selectedUserGroup: UserGroup = new UserGroup();

  constructor(private userGroupService: UserGroupService) { }

  async ngOnInit(): Promise<void> {
    await this.getAllUserGroups();
  }

  selectUserGroup(userGroup: UserGroup): void {
    this.selectedUserGroup = { ...userGroup };
  }

  newUserGroup(): void {
    this.selectedUserGroup = new UserGroup();
  }

  async userGroupChanged(): Promise<void> {
    await this.getAllUserGroups();
    this.newUserGroup();
  }

  async getAllUserGroups(): Promise<void> {
    this.userGroups = await this.userGroupService.getAll();
  }

}
