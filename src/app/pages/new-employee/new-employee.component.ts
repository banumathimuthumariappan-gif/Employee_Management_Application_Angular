import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Employee } from '../../model/employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-new-employee',
  imports: [FormsModule, NgIf, NgForOf],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent implements OnInit{
  departments: any = [];
  designationIds: any = [];
  employeeTypes = [
    { id: 'fullTime', name: 'Full Time'},
    { id: 'partTime', name: 'Part Time'},
    { id: 'contract', name: 'Contract'},
    { id: 'intern', name: 'Intern'}
  ];

  ngOnInit() {
    this.getDepartments();
  }

  constructor(private httpService: EmployeeService) {
    
  }

  newEmployee = {
    employeeId: 0,
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfJoining: '',
    departmentId: '',
    designationId: '',
    employeeType: '',
    salary: 0,
  };

  dummyNewEmployee = {
  "employeeId": 3664,
  "fullName": "Yogesh",
  "email": "yog@gmail.com",
  "phone": "9378483434",
  "gender": "Male",
  "dateOfJoining": "2025-08-15T00:00:00",
  "employeeType": "new",
  "salary": 7564,
  "departmentName": "Sales",
  "designationName": "Sale Lead"
};

  getDepartments() {
    this.httpService.getDepartments().subscribe({
      next: (data) => {
        console.log("Department data received");
        console.log(data);
        this.departments = data;
      }, 
      error: (error) => {
        console.log("Error on getting departments");
        
      }
    });
  }

  onDepartmentIDSelected(event: any) {
    console.log("Department Id: " + event.target.value);
    let departmentId = event.target.value;
    this.getDesignationIds(departmentId);
  }

  getDesignationIds(departmentId: number) {
    this.httpService.getDesignationsByDeptId(departmentId).subscribe({
      next: (data) => {
        console.log(data);
        this.designationIds = data;
        
      },
      error: (error) => {
        console.log(error);
        
      }
    });
  }

  // Creating new employee
  submitForm(form: any) {
    if(form.valid) {
      console.log("New employee");
      console.log(this.newEmployee);
    }
  }
}
