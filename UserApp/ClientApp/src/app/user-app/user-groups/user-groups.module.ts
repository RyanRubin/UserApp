import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserGroupListComponent } from './user-group-list/user-group-list.component';
import { UserGroupDetailsComponent } from './user-group-details/user-group-details.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: UserGroupListComponent }
];

@NgModule({
  declarations: [
    UserGroupListComponent,
    UserGroupDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class UserGroupsModule { }
