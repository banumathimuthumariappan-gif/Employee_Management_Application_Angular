import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee';
import { DatePipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-display-employees',
  imports: [NgForOf, DatePipe],
  templateUrl: './display-employees.component.html',
  styleUrl: './display-employees.component.css'
})
export class DisplayEmployeesComponent implements OnInit{
  
  allEmployees: any = [];
  constructor(private httpService: EmployeeService) {}
  
  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.httpService.getAllEmployees().subscribe({
      next: (resData) => {
        this.allEmployees = resData;
        console.log(this.allEmployees);
      }, 
      error: (error) => {
        console.log("Error in fetching employee data");
      }
    });
  }
}
