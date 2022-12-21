import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  public clicked:boolean=false;
  state:string[]=[];
  contactFform ;
  constructor() {
    this.contactFform = new FormGroup({
      firstname: new FormControl('felix',[Validators.required,Validators.minLength(5)]),
      lastname: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      isMarried: new FormControl(),
      country: new FormControl(),
    st : new FormControl()
    })
this.contactFform.setValue({firstname:'Felix',lastname:'Rajappan',email:'felixtry@gmail.com',
gender:'Male',isMarried:true,country:'1',st:'Kerala'});
this.contactFform.patchValue({firstname:'Felix'});
this.dropdownchange();
   }
   onSubmit() {
    this.clicked = true;
    sessionStorage.setItem('LoggedIn','Admin');
    console.log(this.contactFform.value);
    console.log(sessionStorage.getItem('LoggedIn'));
    
  }
  ngOnInit(): void {
  }
  dropdownchange(){
    console.log(this.contactFform.value.country);
    if(this.contactFform.value.country == "1")
    {
      
      this.state = ['Tamil Nadu','Kerala']
    }
    else if(this.contactFform.value.country == "2")
    {
      this.state = ['Florida','Texas']
    }
  }

}
