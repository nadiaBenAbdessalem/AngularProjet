import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color = 'yellow';
changeColor(input) {
  console.log(input.value);
  this.color = input.value;
  input.value = '';

}
  constructor() { }

  ngOnInit() {
  }

  processRequest(message : any){
  alert(message);
  }

}
