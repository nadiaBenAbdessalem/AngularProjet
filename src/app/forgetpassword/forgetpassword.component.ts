import { Component, OnInit } from '@angular/core';
import {ForgetpasswordService} from '../services/forgetpassword.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
 email;
  constructor(private serv: ForgetpasswordService) { }

  ngOnInit() {
  }

  forgetPassword(email) {

    this.serv.forgotPassword(email).subscribe(result => {
      console.log('user.ts credencials to reset', result);

    });
  }


}
