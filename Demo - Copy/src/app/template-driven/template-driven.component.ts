import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(c:any) {
    console.log(c.value);
  }
}


export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}