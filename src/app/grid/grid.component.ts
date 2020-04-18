import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() actions: Number;
  @Input() gridSequence: Number;
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }

  clickMe(actionSequence) {
    this.onClick.emit(actionSequence);
  }

}
