import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import {ProductlistComponent} from "./productlist/productlist.component"
import {DashboardComponent} from "./dashboard/dashboard.component"
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'product',component:ProductlistComponent},
  {path:'dashboard',component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }