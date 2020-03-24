import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  constructor(private http: HttpClient) { }


  forgotPassword(email) {
    console.log('credencials forget password: ' + email);
    return this.http.post(environment.baseUrl + '/users/forgotpassword?email=' + email, {});
  }


  resetPassword(email, password) {
    console.log('credencials forget password: ' + email + password);
    return this.http.post(environment.baseUrl + '/users/resetpassword?email=' + email + '&password=' + password, {});
  }





}
