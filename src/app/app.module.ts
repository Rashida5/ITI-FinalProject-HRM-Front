import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { KeycloakAuthService } from './keycloak.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BonusListComponent } from './bouns-list/bonus-list.component';
import { BonusAddComponent } from './bonus-add/bonus-add.component';
import { BonusUpdateComponent } from './bonus-update/bonus-update.component';
import { VacationListComponent } from './vacation-list/vacation-list.component';
import { AddVacationComponent } from './add-vacation/add-vacation.component';
import { DeductionListComponent } from './deduction-list/deduction-list.component';
import { DeductionAddComponent } from './deduction-add/deduction-add.component';
import { DeductionUpdateComponent } from './deduction-update/deduction-update.component';
import { AuthInterceptor } from './auth.interceptor';
import { LoginComponent } from './login/login.component';


function initializeKeycloak(keycloak: KeycloakAuthService) {
  return () => keycloak.init();
}

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
         DeductionUpdateComponent,
         LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    HomeComponent,
    BrowserAnimationsModule ,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
     MatNativeDateModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakAuthService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
