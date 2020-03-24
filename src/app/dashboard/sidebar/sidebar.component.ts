import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
user;
currentUser;
authorities;
  valid;
  authen;
  constructor(private service: LoginService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log('user.ts sidebar' + this.user.username);
    // this.currentUser = this.service.currentUserValue;
 /*   this.currentUser = this.service.currentUserSubject.getValue();
    console.log('user.ts observable...........' + this.currentUser.firstname);*/
    const userF = JSON.parse(JSON.stringify(this.user));
    this.authen = JSON.parse(JSON.stringify(userF)).authorities;
    console.log('user.ts authority...........' , this.authen['0'].id);
    this.valid = this.authen['0'].id;
  }

}
