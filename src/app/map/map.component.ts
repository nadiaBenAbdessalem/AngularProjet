import { Component, OnInit } from '@angular/core';
import {from, interval, Observable, zip} from 'rxjs';
import {map, mergeMap, switchMap} from 'rxjs/internal/operators';
import {flatMap} from 'tslint/lib/utils';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
coloorr = 'green';
show = false;
  listName;

  allumer(){
    this.show=!this.show;
  }
constructor() {

}

ngOnInit() {
  this.temperature();
  this.getList();

}

  getList() {
    const visitors = [
      'Namita',
      'Amit',
      'Rohit',
      'Neetika'
    ];

    const source = from(visitors);
    source.pipe(map(x => 'Hello ' + x))
      .subscribe(result => {
        this.listName = result;
      });

    console.log('list of names...............:' + this.listName);
  }


  /* temperature() {

     const getTemperature = city => 100 / city.length;

     // Create an Observable from an array : Strasbourg => Nice => Lyon.
     const city$ = from(['Strasbourg', 'Nice', 'Lyon']);

     const temperature$ = city$
       .pipe(map(city => getTemperature(city)));

     temperature$.subscribe(temperature => console.log(temperature));
   }*/

  temperature() {
    const getCurrentCity = () => {
      /* Produce one value from the array every second. */
      return zip(
        from(['Strasbourg', 'Paris', 'Lyon']),
        interval(1000)
      )
        .pipe(map(([city]) => city));
    };

    const getTemperature = city => {
      /* Produce the same temperature per city every 500ms. */
      return interval(500)
        .pipe(map(() => 100 / city.length));
    };


    const currentCityTemperature$ = getCurrentCity()
      .pipe(switchMap(city => getTemperature(city)));

    // currentCityTemperature$
    //  .subscribe(temperature => console.log(temperature));
   // getCurrentCity().subscribe(city => console.log (city));
    // getTemperature('Strasbourg').subscribe(tem => console.log(tem));

  }


}
