import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
   public currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
 //  public currentUser: Observable<User>;


  constructor(private http: HttpClient) {
   // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  //  this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }


login(username, password) {
    console.log('credencials: ' + username + password);
    return this.http.post(environment.baseUrl + '/users/login', { username,  password});
  }


  logout() {
/*
    const header = new HttpHeaders({

     Authorization: 'Bearer ' + localStorage.getItem('token'),
     'Content-Type': 'application/json'
   });*/

    return this.http.get(environment.baseUrl + '/logout');

  }


 /* logout() {
    localStorage.removeItem('user.ts');
    localStorage.removeItem('token');
  }*/

  public getToken(): string {
    return localStorage.getItem('token');
  }




}
