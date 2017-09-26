import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DepartmentsComponent } from './components/departments.component';
import { DepartmentDetailsComponent } from './components/department.detail.component';
import { DepartmentsService } from './services/departments.service';


import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [DepartmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
