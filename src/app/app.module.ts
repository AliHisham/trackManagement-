import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import{FormsModule} from'@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgmCoreModule}from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatIconModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table'
import {MatBadgeModule} from '@angular/material/badge'
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OutputComponent } from './output/output.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GuardService } from './guard.service';
import { AdminGuardService } from './admin-guard.service';
import { ShipmentComponent } from './shipment/shipment.component';
import { ClientsComponent } from './clients/clients.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShipmentFormComponent } from './shipment-form/shipment-form.component';
import { TrackServiceService } from './track-service.service';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { HomeComponent } from './home/home.component';
import { DataChartComponent } from './data-chart/data-chart.component';
import { ReportComponent } from './report/report.component';
import { ClientsReportsComponent } from './clients-reports/clients-reports.component';
import { ShipmentsCitiesReportsComponent } from './shipments-cities-reports/shipments-cities-reports.component';
import { ShipmentsClientsReportComponent } from './shipments-clients-report/shipments-clients-report.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserButtonComponent } from './user-button/user-button.component';
import { DataRectComponent } from './data-rect/data-rect.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { HomeGuardService } from './home-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    LoginComponent,
    ShipmentComponent,
    ClientsComponent,
    EmployeeComponent,
    ShipmentFormComponent,
    EmployeesFormComponent,
    ClientFormComponent,
    HomeComponent,
    DataChartComponent,
    ReportComponent,
    ClientsReportsComponent,
    ShipmentsCitiesReportsComponent,
    ShipmentsClientsReportComponent,
    UsersComponent,
    UsersListComponent,
    UserButtonComponent,
    DataRectComponent,
    ClientSearchComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    NgbModule,
    MatInputModule,
    MatPaginatorModule,
   ChartsModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyDQoRcaZs88bdXzLynRVoKDZjQv7SqT94U"
    }),
    HttpClientModule,
    RouterModule.forRoot([
      
      {path:"",component:LoginComponent},
      {path:"output" , component:OutputComponent , canActivate:[GuardService] },
      {path:"shipment" , component:ShipmentComponent, canActivate:[GuardService]},
      {path:"clients" , component:ClientsComponent, canActivate:[GuardService]},
      {path:"employee" , component:EmployeeComponent, canActivate:[GuardService]},
      {path:"shipmentform" , component:ShipmentFormComponent, canActivate:[GuardService]},
      {path:"employeeForm" , component:EmployeesFormComponent, canActivate:[GuardService]},
      {path:"employeeForm/:id" , component:EmployeesFormComponent, canActivate:[GuardService]},
      {path:"clientForm" , component:ClientFormComponent, canActivate:[GuardService]},
      {path:"clientForm/:id" , component:ClientFormComponent, canActivate:[GuardService]},
      {path:"clients/:id" , component:ClientsComponent, canActivate:[GuardService]},
      {path:"shipmentform/:id" , component:ShipmentFormComponent, canActivate:[GuardService]},
      {path:"home" , component:HomeComponent, canActivate:[HomeGuardService]},
      {path:"report" , component:ReportComponent, canActivate:[GuardService]},
      {path:"clientsReport" , component:ClientsReportsComponent, canActivate:[GuardService]},
      {path:"shpmentsCities" , component:ShipmentsCitiesReportsComponent, canActivate:[GuardService]},
      {path:"shpmentsClients" , component:ShipmentsClientsReportComponent, canActivate:[GuardService]},
      {path:"users" , component:UsersComponent,  canActivate:[AdminGuardService]}, 
      {path:"usersList" , component:UsersListComponent,  canActivate:[AdminGuardService]}
      

     

    ])

  ],
  providers: [ GuardService , AdminGuardService,TrackServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
