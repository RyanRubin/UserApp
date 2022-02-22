import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User = new User();
  @Output() userChanged = new EventEmitter();
  date: Date = new Date();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  async saveUser(): Promise<void> {
    if (this.user.id) {
      await this.userService.update(this.user.id, this.user);
    } else {
      await this.userService.create(this.user);
    }
    this.userChanged.emit();
  }

  async deleteUser(): Promise<void> {
    if (confirm('Confirm delete?')) {
      await this.userService.delete(this.user.id);
      this.userChanged.emit();
    }
  }

}
