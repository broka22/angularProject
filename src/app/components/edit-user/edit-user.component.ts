import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userEditForm: FormGroup;
  user: any;
  id: any;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUserById();
    this.userEditForm = new FormGroup({
      id: new FormControl(''),
      userName: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(''),
      mobileNo: new FormControl(''),
      gender: new FormControl(''),
      hobbies: new FormControl(''),
      nationality: new FormControl(''),
      comments: new FormControl('')
    });
  }

  updateUser = (user) => {
    console.log(JSON.stringify(user));
    this.userService.updateUser(user).subscribe(res => {
      alert('user info has been successfully updated.');
      this.router.navigate(['/list-user']);
    });
  }

  getUserById = () => {
    this.userService.getUserById(this.id).subscribe(user => {
      this.user = user;
    });
  }

}
