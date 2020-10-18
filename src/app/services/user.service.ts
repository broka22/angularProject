import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({ // service is a plain ts class so we do not need a decorator - @Component //
  providedIn: 'root'
})
export class UserService {// add suffix 'Service' in the class name 'user'//

  baseUrl = 'http://localhost:8099/users';

  constructor(private  http: HttpClient) { }

  saveUser = (user) => {
    return this.http.post(this.baseUrl, user);
  }

  updateUser = (user) => {
    return this.http.put(this.baseUrl, user);
  }

  deleteUser = (id) => {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  getUserById = (id) => {
    return this.http.get(this.baseUrl + '/' + id);
  }

  getAllUser = () => {
    return this.http.get(this.baseUrl);
  }

}
