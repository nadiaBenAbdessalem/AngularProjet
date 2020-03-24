import { Injectable } from '@angular/core';

import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
    }

 /* register(firstname, lastname, username, password) {
    return this.http.post(environment.baseUrl + '/users/register', { firstname, lastname, username,  password});
    console.log('credencials register ' + username + password + firstname + lastname);
  }*/


  register(user: User) {
    return this.http.post(environment.baseUrl + '/users/register', user);
  }
}
