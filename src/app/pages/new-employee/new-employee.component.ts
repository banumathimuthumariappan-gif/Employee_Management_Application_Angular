import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-employee',
  imports: [FormsModule, NgIf],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {
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
    salary: '',
  };

  submitForm(form: any) {
    if(form.valid) {
      console.log(this.newEmployee); 
      form.resetForm();
    }
  }
}
