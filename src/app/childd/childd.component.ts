import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-childd',
  templateUrl: './childd.component.html',
  styleUrls: ['./childd.component.css']
})
export class ChilddComponent implements OnInit {
  @Input() childcolor ;

  @Output() eventFromChild = new EventEmitter();

  ngOnInit() {
    console.log('message from child', this.childcolor);
  }

  eventToSent() {
    this.eventFromChild.emit(
      'please give me some money'
    );
  }
}
