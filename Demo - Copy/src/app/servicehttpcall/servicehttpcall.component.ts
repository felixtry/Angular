import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Interface/Employee';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-servicehttpcall',
  templateUrl: './servicehttpcall.component.html',
  styleUrls: ['./servicehttpcall.component.css'],
  providers:[CrudService]
})
export class ServicehttpcallComponent implements OnInit {
  
  addPerson():void{
    var person = {
      EmpID: 1,
      EmpName: "Hanks"
   };
    this.crds.addPerson(person).subscribe(resp=>console.log(resp));
    console.log("1");
  }
  constructor(private crds:CrudService) { }
  weather : any;
  ngOnInit(): void {
   this.crds.getPosts().subscribe(data => {
    this.weather= data;
},
error => {
}
);
  }

}
