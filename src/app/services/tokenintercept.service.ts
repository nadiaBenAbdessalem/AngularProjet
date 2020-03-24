import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptService implements HttpInterceptor {

  user;
  token;

  constructor(private loginService: LoginService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.loginService.getToken()) {
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.loginService.getToken()}`,
          'Content-Type': 'application/json'

        }
      });
    }

    return next.handle(req);
  }
}
