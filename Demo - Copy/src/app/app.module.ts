import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentListComponent } from './student-list/student-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { LoginTestComponent } from './login-test/login-test.component';
import { ServiceCallComponent } from './service-call/service-call.component';
import { ServicehttpcallComponent } from './servicehttpcall/servicehttpcall.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CanActivate } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DemoInterceptor } from './demo.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    StudentListComponent,
    ProductListComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    LoginTestComponent,
    ServiceCallComponent,
    ServicehttpcallComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: 
  [ {
    provide: HTTP_INTERCEPTORS,
    useClass: DemoInterceptor,multi: true}],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
