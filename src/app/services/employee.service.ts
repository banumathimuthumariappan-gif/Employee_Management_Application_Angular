import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  employees = [];
  private getEmployeeUrl = 'https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees';

  getAllEmployees() {
    return this.http.get<Employee>(this.getEmployeeUrl);
  }
}
