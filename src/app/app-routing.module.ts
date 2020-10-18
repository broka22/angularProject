import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {ListUserComponent} from './components/list-user/list-user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'edit-user/:id', component: EditUserComponent},
  {path: 'list-user', component: ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
