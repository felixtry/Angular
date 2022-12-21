import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() item = ''
  count: number =0;
  @Output() countvhanged:EventEmitter<number> = new EventEmitter()
  increment()
  {
    this.count++;
    this.countvhanged.emit(this.count);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
