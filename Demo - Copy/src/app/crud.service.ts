import { Injectable } from '@angular/core';
import { Product } from 'src/Interface/Product';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/Interface/Employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public http: HttpClient) { }
  stu : Product[] =[]
  url:string = "https://localhost:44361/WeatherForecast";

  getinfo():Product[]
  {
     this.stu  =[{ProductID:1,ProductName:"KeyChain",ProductPrice:10.00,ProductImagePath:"../assets/Store/1.jpg" },
  {ProductID:2,ProductName:"Water Bottle",ProductPrice:20.00,ProductImagePath:"../assets/Store/2.jpg" },
  {ProductID:3,ProductName:"Hand Warmers",ProductPrice:30.00 ,ProductImagePath:"../assets/Store/3.jpg"},
  {ProductID:4,ProductName:"Crocs",ProductPrice:40.00 ,ProductImagePath:"../assets/Store/4.jpg" },
  {ProductID:5,ProductName:"Black T Shirt",ProductPrice:50.00 ,ProductImagePath:"../assets/Store/5.jpg"},
  {ProductID:6,ProductName:"Product6",ProductPrice:60.00 ,ProductImagePath:"../assets/Store/6.jpg" },
  {ProductID:7,ProductName:"Product7",ProductPrice:70.00 ,ProductImagePath:"../assets/Store/7.jpg"},
  {ProductID:8,ProductName:"Product8",ProductPrice:80.00 ,ProductImagePath:"../assets/Store/8.jpg"}
]
    return this.stu;
  }
  getPosts() {
    return this.http.get(this.url);
  }

  addPerson(person:Employee): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
 
   
    
    return this.http.post("https://localhost:44361/WeatherForecast" , body,{'headers':headers})
  }
  
}
