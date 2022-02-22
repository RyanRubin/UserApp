import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserGroupsComponent } from './user-groups.component';


const routes: Routes = [
  { path: '', component: UserGroupsComponent }
];

@NgModule({
  declarations: [
    UserGroupsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserGroupsModule { }
