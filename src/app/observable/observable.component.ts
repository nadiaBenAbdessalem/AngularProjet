import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  currentImage: string;
  mesImages = [
    'img_avatar1.png',
  'img_avatar2.png'
    ];
monObservable: Observable<any>;
  constructor() { }

  ngOnInit() {
this.monObservable = new Observable((observer) => {
      let i = this.mesImages.length - 1;
      setInterval(
        () => {
          observer.next(this.mesImages[i]);
          if (i > 0) {
            i--;
          } else {
            i = this.mesImages.length - 1;
          }
       }
   , 10000);
    }
);
this.monObservable.subscribe( result => {
    console.log('limage est ...........', result);
    this.currentImage = result;
  }
);
  }

}
