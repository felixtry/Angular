import { Component, OnInit } from '@angular/core';
import { Student } from 'src/Interface/Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }
  public stu :Student[] =[{age:30,studentname:'John'},{age:40,studentname:'Doe'},{age:40,studentname:'Doe'}]
  ngOnInit(): void {
  }
  public deleteRow(d:any){
    const index = this.stu.indexOf(d);
    this.stu.splice(index, 1);

   }
}
