import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';


import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BonusListComponent } from './bouns-list/bonus-list.component';
import {  BonusAddComponent } from './bonus-add/bonus-add.component';
import { BonusUpdateComponent } from './bonus-update/bonus-update.component';
import { VacationListComponent } from './vacation-list/vacation-list.component';
import { AddVacationComponent } from './add-vacation/add-vacation.component';

import { DeductionListComponent } from './deduction-list/deduction-list.component';
import { DeductionAddComponent } from './deduction-add/deduction-add.component';
import { DeductionUpdateComponent } from './deduction-update/deduction-update.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,

    AddEmployeeComponent,
         UpdateEmployeeComponent,
         ShowDetailsComponent,
         AdminLoginComponent,
         BonusListComponent,
         BonusAddComponent,
         BonusUpdateComponent,

         VacationListComponent,
         AddVacationComponent,

         DeductionListComponent,
         DeductionAddComponent,
         DeductionUpdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,FormsModule,HomeComponent, BrowserAnimationsModule ,
    MatFormFieldModule, MatInputModule,MatFormFieldModule, MatInputModule, MatDatepickerModule,
     MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
