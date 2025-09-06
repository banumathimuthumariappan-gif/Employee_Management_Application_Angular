import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  employees = [];
  private employeeUrl = 'https://api.freeprojectapi.com/api/EmployeeApp/';

  getAllEmployees() {
    return this.http.get<Employee>(this.employeeUrl + 'GetEmployees');
  }

  createEmployee(newEmployeeData: Employee) {
    
  }

  updateEmployee() {

  }

  deleteEmployee() {

  }
}
