import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterComponent} from "./components/layouts/master/master.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {UserListComponent} from "./components/users/user-list/user-list.component";
import {LoginComponent} from "./components/login/login.component";
import {UserAddComponent} from "./components/users/user-add/user-add.component";
import {UserEditComponent} from "./components/users/user-edit/user-edit.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {
    path: 'admin',
    component: MasterComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: UserListComponent,
      },
      {
        path: 'users/add',
        component: UserAddComponent
      },
      {
        path: 'users/:id/edit',
        component: UserEditComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
