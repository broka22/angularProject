import { Component, OnInit } from '@angular/core'; // import decorator called component to make this a component, from library/core
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({ // apply component decorator to the ts class to make it a module// decorator function // @Injectable present by default //
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {// Plain typeScript class, Pascal naming convention, add suffix component //
// add export for angular to see this class
  userForm: FormGroup;

  // add UserService as a dependency to this class and register as a provider to the app module//
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(''),
      mobileNo: new FormControl(''),
      gender: new FormControl(''),
      hobbies: new FormControl(''),
      nationality: new FormControl(''),
      comments: new FormControl(''),
    });
  }

  saveUser = (user) => {
    console.log(JSON.stringify(user));
    this.userService.saveUser(user).subscribe(res => {
      alert('user info has been successfully saved.');
      this.router.navigate(['/list-user']);
    });
  }



}
