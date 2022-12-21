import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Interface/Product';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-service-call',
  templateUrl: './service-call.component.html',
  styleUrls: ['./service-call.component.css'],
  providers:[CrudService]
})
export class ServiceCallComponent implements OnInit {
  info : Product[] = [] ;
  constructor(private crds:CrudService ) {

   }
  getinfoFromServcice()
  {
    this.info = this.crds.getinfo();
  }
  addPerson():void{
    var person = {
      EmpID: 1,
      EmpName: "Hanks"
   };
    this.crds.addPerson(person);
    console.log("1");
  }
  ngOnInit(): void {
    this.info = this.crds.getinfo();
  }

}
