import { Component } from '@angular/core';
import { DepartmentsService } from '../services/departments.service';
import { NgForm, FormGroup} from '@angular/forms';
import { ResponseOptions } from '@angular/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
  departments: any;
  departmentForm: FormGroup;
  constructor(private departmentsService: DepartmentsService, responseOptions: ResponseOptions){}

  ngOnInit() {
    this.getDepartmentsInfo();
  }

  getDepartmentsInfo(){
    this.departmentsService.getDepartmentsDetail().subscribe(res => this.departments = res.json());
  }

  removeDepartment(id, objectKey){
    this.departmentsService.removeDepartmentById(id)
      .subscribe(res => this.getDepartmentsInfo())
  }

  addDepartment(department: NgForm){
    if(department.value.name === '' || department.value.description === ''){
      alert('Name and description of department are required. Please enter all data and try again.');
    } else {
      this.departmentsService.addDepartment(department.value)
        .subscribe(res => this.getDepartmentsInfo())
    }
  }

}
