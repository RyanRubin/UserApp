import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', loadChildren: () => import('./user-app/home/home.module').then(m => m.HomeModule) },
      { path: 'users', loadChildren: () => import('./user-app/users/users.module').then(m => m.UsersModule) },
      { path: 'user-groups', loadChildren: () => import('./user-app/user-groups/user-groups.module').then(m => m.UserGroupsModule) }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
