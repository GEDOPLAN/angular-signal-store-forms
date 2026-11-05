import { Routes } from '@angular/router';
import { UserList } from './user/user-list/user-list';
import { UserDetails } from './user/user-details/user-details';

export const routes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: 'user', component: UserList},
  {path: 'user/:id', component: UserDetails},
];
