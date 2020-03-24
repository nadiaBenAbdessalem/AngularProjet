import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {HelloComponent} from './hello/hello.component';

class Post {
  constructor(
    public userId: number,
    public id: string,
    public title: string,
    public body: string
  ) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  title = 'clientessai';
//  listNum  = [7, 8];
  v1 = 'Nadia';
  @ViewChild(HelloComponent, {static: false}) hello: HelloComponent;

 //   @ViewChild('pRef', {static: false}) pRef: ElementRef;
  //  @ViewChildren(HelloComponent) hellos: QueryList<any>;

  ngAfterViewInit() {
 //   this.hellos.forEach(hello => console.log(hello));
 //   console.log('Hello.......... ', this.hello.ffff);
//    console.log(this.pRef.nativeElement.innerHTML);
 //   this.pRef.nativeElement.innerHTML = "DOM updated succesfully!!!";
  }


//ngOnInit() {}

}
