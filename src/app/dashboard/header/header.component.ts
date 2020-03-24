import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProduitService} from '../../services/produit.service';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {LoginComponent} from '../../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    user;
    currentUser;
  constructor(private service: LoginService, private router: Router) {

}

  ngOnInit() {
    this.currentUser = this.service.currentUserSubject.getValue();
    console.log('user behaviour subject...........' + this.currentUser.firstname);
 /*   this.user = JSON.parse(localStorage.getItem('user'));
    console.log('user...........' + this.user);*/
  }


 /* logout() {

    this.service.logout().subscribe(res => {
      console.log('successfully logged out');
    });
    this.router.navigate(['/login']);
  }*/

 logout() {
   this.service.logout().subscribe(res => {
     console.log('successfully logged out');
     localStorage.setItem('state', '0');

     this.router.navigate(['/login']);
   });


 }



}
