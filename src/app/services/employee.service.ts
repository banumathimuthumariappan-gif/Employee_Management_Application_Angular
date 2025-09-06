import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departments, DesignationId, Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  employees = [];
  private employeeUrl = 'https://api.freeprojectapi.com/api/EmployeeApp/';
  

  getDepartments() {
    // https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments
    return this.http.get<Departments>(this.employeeUrl + 'GetDepartments');
  }

  getDesignationsByDeptId(departmentId: number) {
    // https://api.freeprojectapi.com/api/EmployeeApp/GetDesignationsByDeptId?deptId=1
    return this.http.get<DesignationId>(` ${this.employeeUrl}GetDesignationsByDeptId?deptId=${departmentId}`);
  }

  getAllEmployees() {
    return this.http.get<Employee>(this.employeeUrl + 'GetEmployees');
  }

  createEmployee(newEmployeeData: Employee) {
    // this.http.post();
  }

  updateEmployee() {

  }

  deleteEmployee() {

  }
}
