import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';
import {ForgetpasswordService} from '../services/forgetpassword.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

    password;
    email;
  constructor(private routerActivate: ActivatedRoute, private service: ForgetpasswordService) {

    this.email = routerActivate.snapshot.queryParams['email'];

    console.log('email from url :', this.email);


  }

  ngOnInit() {
  }


  resetPassword() {

    this.service.resetPassword(this.email, this.password).subscribe(result => {
      console.log('user.ts credencials to reset', result);

    });
  }
}
