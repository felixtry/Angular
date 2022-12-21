import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Interface/Product';
import { Student } from 'src/Interface/Student';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  public stu :Product[] =[{ProductID:1,ProductName:"KeyChain",ProductPrice:10.00,ProductImagePath:"../assets/Store/1.jpg" },
  {ProductID:2,ProductName:"Water Bottle",ProductPrice:20.00,ProductImagePath:"../assets/Store/2.jpg" },
  {ProductID:3,ProductName:"Hand Warmers",ProductPrice:30.00 ,ProductImagePath:"../assets/Store/3.jpg"},
  {ProductID:4,ProductName:"Crocs",ProductPrice:40.00 ,ProductImagePath:"../assets/Store/4.jpg" },
  {ProductID:5,ProductName:"Black T Shirt",ProductPrice:50.00 ,ProductImagePath:"../assets/Store/5.jpg"},
  {ProductID:6,ProductName:"Product6",ProductPrice:60.00 ,ProductImagePath:"../assets/Store/6.jpg" },
  {ProductID:7,ProductName:"Product7",ProductPrice:70.00 ,ProductImagePath:"../assets/Store/7.jpg"},
  {ProductID:8,ProductName:"Product8",ProductPrice:80.00 ,ProductImagePath:"../assets/Store/8.jpg"}
]
  ngOnInit(): void {
  }

  }


