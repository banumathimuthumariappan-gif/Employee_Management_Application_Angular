import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  constructor(private router: Router) {}
  
  addNewEmployee() {
    this.router.navigateByUrl('/employee/add-new-employee');
  }

  displayEmployees() {
    this.router.navigateByUrl('/employee/display-employees');
  }
}
