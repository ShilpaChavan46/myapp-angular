import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyListComponent } from './company-list/company-list.component';
import { EmployeeService } from './employee.service';
import { CompanyService } from './company.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService,
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
