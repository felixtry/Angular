import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ServiceCallComponent } from './service-call/service-call.component';
import { ServicehttpcallComponent } from './servicehttpcall/servicehttpcall.component';

import { StudentListComponent } from './student-list/student-list.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent,canActivate:[AuthGuard]  },
  { path: 'StudentList', component: StudentListComponent },
  {path:'Product',component:ProductListComponent},
  {path:'ParentChild',component:ParentComponentComponent},
  {path:'TemplateDriven',component:TemplateDrivenComponent},
  {path:'ServiceCall',component:ServiceCallComponent},
  {path:'Reactive',component:ReactiveComponent},
  {path:'httpServiceCall',component:ServicehttpcallComponent}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
