import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) {

  }

  getCategories(): Observable<Category[]> {


    return this.http.get<Category[]>(environment.baseUrl + '/categories/list');
  }


 /* getCategories()  {


    return this.http.get(environment.baseUrl + '/categories/list');
  }*/





 /* getcategNbr() {

    const header = new HttpHeaders({

      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json'
    });


    console.log(environment.baseUrl + '/categories/catgNbr');
    // return this.http.post(environment.baseUrl + '/categories/catgNbr', {}, {headers: header});
    return this.http.post(environment.baseUrl + '/categories/catgNbr', {});
  }*/

  getcategNbr() {

    console.log(environment.baseUrl + '/categories/catgNbr');
    // return this.http.post(environment.baseUrl + '/categories/catgNbr', {}, {headers: header});
    return this.http.get(environment.baseUrl + '/categories/catgNbr');
  }

}
