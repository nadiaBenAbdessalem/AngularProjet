import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {environment} from '../../environments/environment';
import {Subscription} from 'rxjs';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  email;
  name;
  password;
  loginSub: Subscription;
  redirectUrl: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private loginService: LoginService, ) {

  }

  ngOnInit() {

    //  this.userService.logout();
  }

  login() {
    this.loading = true;
    this.loginService.login(this.name, this.password)
      .subscribe(
        result => {
          this.loading = false;

          if (result) {

            const data = JSON.parse(JSON.stringify(result)).data;
            const body = JSON.parse(JSON.stringify(data)).body;
            const token = JSON.parse(JSON.stringify(body)).access_token;
            const user = JSON.parse(JSON.stringify(body)).user;
            const userF = JSON.parse(JSON.stringify(user));
            localStorage.setItem('token', token);
            localStorage.setItem('state', "1");
            localStorage.setItem('user', JSON.stringify(userF));
            this.navigateAfterSuccess();
          //  console.log('userrrr:...........', JSON.stringify(userF));
         //   console.log(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(result)).data)).body)).user.ts);
         //   console.log(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(result)).data)).body)).access_token);


          } else {
            this.error = 'Username or password is incorrect';
          }
        },
        error => {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        });

  }

  private navigateAfterSuccess() {

    this.router.navigate(['/dashboard']);

  }

 /* ngOnDestroy() {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }*/
}
