import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BonusListComponent } from "./bouns-list/bonus-list.component";
import { BonusAddComponent } from "./bonus-add/bonus-add.component";
import { BonusUpdateComponent } from "./bonus-update/bonus-update.component";
import { VacationListComponent } from './vacation-list/vacation-list.component';
import { AddVacationComponent } from './add-vacation/add-vacation.component';
import { DeductionListComponent } from './deduction-list/deduction-list.component';
import { DeductionAddComponent } from './deduction-add/deduction-add.component';
import { DeductionUpdateComponent } from './deduction-update/deduction-update.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: AdminLoginComponent },

  // Protected routes
  { path: "show-all-employees", component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: "add-employee", component: AddEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'updating-by-id/:id', component: UpdateEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'details-of-employee/:id', component: ShowDetailsComponent, canActivate: [AuthGuard] },
  { path: 'bonus', component: BonusListComponent, canActivate: [AuthGuard] },
  { path: 'add-bonus', component: BonusAddComponent, canActivate: [AuthGuard] },
  { path: 'update-bonus/:id', component: BonusUpdateComponent, canActivate: [AuthGuard] },
  { path: 'vacations', component: VacationListComponent, canActivate: [AuthGuard] },
  { path: 'add-vacation', component: AddVacationComponent, canActivate: [AuthGuard] },
  { path: 'deduction', component: DeductionListComponent, canActivate: [AuthGuard] },
  { path: 'add-deduction', component: DeductionAddComponent, canActivate: [AuthGuard] },
  { path: 'update-deduction/:id', component: DeductionUpdateComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
