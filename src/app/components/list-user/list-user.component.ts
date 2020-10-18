import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser = () => {
    this.userService.getAllUser().subscribe(users => {
      this.users = users;
    });
  }

  addUser = () => {
    this.router.navigate(['/add-user']);
  }

  editUser = (id) => {
    this.router.navigate(['/edit-user', id]);
  }

  deleteUser = (id) => {
    this.userService.deleteUser(id).subscribe(res => {
      alert('user has been deleted.');
      this.getAllUser();
    });
  }

}
