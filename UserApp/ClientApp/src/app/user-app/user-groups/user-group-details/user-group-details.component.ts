import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserGroup } from '../../shared/models/user-group';
import { UserGroupService } from '../../shared/services/user-group.service';

@Component({
  selector: 'app-user-group-details',
  templateUrl: './user-group-details.component.html',
  styleUrls: ['./user-group-details.component.css']
})
export class UserGroupDetailsComponent implements OnInit {

  @Input() userGroup: UserGroup = new UserGroup();
  @Output() userGroupChanged = new EventEmitter();

  constructor(private userGroupService: UserGroupService) { }

  ngOnInit(): void {
  }

  async saveUserGroup(): Promise<void> {
    if (this.userGroup.id) {
      await this.userGroupService.update(this.userGroup.id, this.userGroup);
    } else {
      await this.userGroupService.create(this.userGroup);
    }
    this.userGroupChanged.emit();
  }

  async deleteUserGroup(): Promise<void> {
    if (confirm('Confirm delete?')) {
      await this.userGroupService.delete(this.userGroup.id);
      this.userGroupChanged.emit();
    }
  }

}
