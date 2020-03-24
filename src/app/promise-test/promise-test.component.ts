import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

class Post {
  constructor(
    public userId: number,
    public id: string,
    public title: string,
    public body: string
  ) { }
}

@Component({
  selector: 'app-promise-test',
  templateUrl: './promise-test.component.html',
  styleUrls: ['./promise-test.component.css']
})
export class PromiseTestComponent implements OnInit {
  api = 'https://jsonplaceholder.typicode.com/posts';
  data = [];

constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPosts();
    this.asyncAction().then(
      () => console.log('Resolved!'),
       err => console.log ('error-------')   );
  //  this.checkString();
  this.essai();
  this.essai2();
  }

  getPosts() {
    const promise = new Promise((resolve, reject) => {
      const apiURL = this.api;
      this.http
        .get<Post[]>(apiURL)
        .toPromise()
        .then((res: any) => {
            // Success
            this.data = res.map((res: any) => {
              return new Post(
                res.userId,
                res.id,
                res.title,
                res.body
              );
            });
            resolve();
          },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }

   asyncAction() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Async is done!');
        resolve();
      }, 1500);
    });
    return promise;
  }


 /* checkString() {
    const one = new Promise<string>((resolve, reject) => {
      resolve('Hello');
    });
    const two = one.then(value => {});
    console.log(one === two);
    two.then(value => {
      console.log('Hi', value);
    });
    two.catch(error => {
      console.log('Oops', value);
    });
  }*/

 essai(){
   const promise1 = new Promise(function(resolve, reject) {
     resolve('success!');
   });

   promise1.then(function(value) {
     console.log(value);
     // expected output: "Success!"
   }, err => console.log("error!!!") );
 }


 essai2(){
   var p2 = new Promise(function(resolve, reject) {
     resolve(1);
   });

   p2.then(function(valeur : any) {
     console.log(valeur); // 1
     return valeur + 1;
   }).then(function(valeur) {
     console.log(valeur + "- cette utilisation synchrone est un peu inutile");
     // 2- cette utilisation synchrone est un peu inutile
   });

   p2.then(function(valeur) {
     console.log(valeur); // 1
   });
 }

}
