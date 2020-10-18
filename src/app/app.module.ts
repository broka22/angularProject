import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {UserService} from './services/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({ // decorator function to convert this plain ts class to a module //
  declarations: [ // property // declarations array
    AppComponent, // default
    AddUserComponent, // add all components that are a part of this module
    EditUserComponent,
    ListUserComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [ // property //
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ // property // singleton pattern //
    UserService // register UserService as a provider in this module for dependency injection to work//
  ],
  bootstrap: [AppComponent] // property //
})
export class AppModule { } // typeScript class //
