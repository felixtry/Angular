import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.component.html',
  styleUrls: ['./login-test.component.css']
})
export class LoginTestComponent implements OnInit {

  constructor() { }
  name : string ="Felix";
  ngOnInit(): void {
  }
display():void{
  alert("Hello" + this.name);
}
}
