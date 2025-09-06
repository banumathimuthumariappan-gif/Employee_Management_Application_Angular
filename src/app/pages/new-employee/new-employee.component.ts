import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-new-employee',
  imports: [FormsModule, NgIf, NgForOf],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {
  departments = [];
  designationIds = [];
  employeeTypes1 = ['Full Time', 'Part Time', 'Contract', 'Intern'];
  employeeTypes = [
    { id: 'fullTime', name: 'Full Time'},
    { id: 'partTime', name: 'Part Time'},
    { id: 'contract', name: 'Contract'},
    { id: 'intern', name: 'Intern'}
  ];

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
    "fullName": "Banumathi",
    "email": "banumathibaby1997@gmail.com",
    "phone": "9597637851",
    "gender": "female",
    "dateOfJoining": "2025-08-15T00:00:00",
    "employeeType": "Full Time",
    "salary": 500000,
    "departmentName": "Dept 1",
    "designationName": "Lead"
  };

  // Creating new employee
  submitForm(form: any) {
    if(form.valid) {
      console.log("New employee");
      console.log(this.newEmployee);
    }
  }
}
