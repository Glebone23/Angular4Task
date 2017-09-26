import { Component } from '@angular/core';
import { DepartmentsService } from '../services/departments.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './department.detail.component.html',
  styleUrls: ['./department.detail.component.css']
})
export class DepartmentDetailsComponent {
  parsedUrl: any;
  departmentId: number;
  employees: any;
  departmentName: string;
  areEmployees: boolean = true;
  constructor(private router: Router, private departmentsService: DepartmentsService){}

  ngOnInit() {
    this.parsedUrl = this.router.parseUrl(this.router.url);
    this.departmentId = this.parsedUrl.root.children.primary.segments[1].path;
    this.getEmployees();
    this.getDepartmentName();
  }
  
  getEmployees(){
    this.departmentsService.getEmployees().subscribe(res => {
      let employeesArr = [];
      for (let prop in res.json()) {
        if(res.json()[prop].departmentId == this.departmentId){
          employeesArr.push(res.json()[prop]);
        }
      }
      if(employeesArr.length > 0)
        this.employees = employeesArr;
      else
        this.areEmployees = false;
    });
  }

  getDepartmentName(){
    this.departmentsService.getDepartmentById(this.departmentId).subscribe(res => {this.departmentName = res.json().name;});
  }
}
