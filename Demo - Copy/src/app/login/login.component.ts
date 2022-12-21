import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  public title:string ="Hello Felix";
  public UserType:string="Teach";
  public isSignUp:boolean=false;
  public uID :string="";
  public operationtype:string="";
  public fruits: string[] = ['Apple', 'Orange', 'Banana']; 
  public stu :any[] =[{age:90,studentname:'felix'}]
  public isDisabled:boolean=false;
  ngOnInit(): void {
  }
  comp1(signup:string): void {
    for (let index = 0; index < this.fruits.length; index++) {
     const element = this.fruits[index];
     console.log(element);
    }
     this.operationtype = signup;
     if(signup=='Login')
     {
       this.isSignUp = false;
     }
     else
     {
       this.isSignUp = true;
     }
   };
   Navigate():void{
    console.log(this.uID);
   }
}
