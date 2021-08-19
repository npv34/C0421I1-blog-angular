import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { NavBarComponent } from './components/core/nav-bar/nav-bar.component';
import {FormsModule} from "@angular/forms";
import { MasterComponent } from './components/layouts/master/master.component';
import { FooterComponent } from './components/layouts/coree/footer/footer.component';
import { SidebarComponent } from './components/layouts/coree/sidebar/sidebar.component';
import { TopbarComponent } from './components/layouts/coree/topbar/topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { MessageComponent } from './components/share/message/message.component';
import { InputSearchComponent } from './components/share/input-search/input-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavBarComponent,
    MasterComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    LoginComponent,
    UserAddComponent,
    MessageComponent,
    InputSearchComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
