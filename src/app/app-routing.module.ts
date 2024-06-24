import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {BonusListComponent} from "./bouns-list/bonus-list.component";
import {BonusAddComponent} from "./bonus-add/bonus-add.component";
import {BonusUpdateComponent} from "./bonus-update/bonus-update.component";
import { VacationListComponent } from './vacation-list/vacation-list.component';
import { AddVacationComponent } from './add-vacation/add-vacation.component';



const routes: Routes = [

  {path:"show-all-employees",component: EmployeeListComponent},
  {path:"add-employee", component: AddEmployeeComponent},
  {path:'', redirectTo: "home", pathMatch:"full"},
  {path:'updating-by-id/:id',component:UpdateEmployeeComponent},
  {path:'details-of-employee/:id',component:ShowDetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:AdminLoginComponent},
  {path:'bonus', component:BonusListComponent},
  {path:'add-bonus', component:BonusAddComponent},
  {path:'update-bonus/:id', component:BonusUpdateComponent},
  { path: 'vacations', component: VacationListComponent },
  { path: 'add-vacation', component: AddVacationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
