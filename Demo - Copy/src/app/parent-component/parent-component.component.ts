import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  currentItem = 'Television1';
  constructor() { }

  ngOnInit(): void {
  }
  countChangeHandler(count1:number)
  {
    console.log(count1);
  }
}
