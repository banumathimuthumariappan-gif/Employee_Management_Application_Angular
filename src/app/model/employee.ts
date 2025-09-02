export class Employee {
  "employeeId": number;
  "fullName": string;
  "email": string;
  "phone": string;
  "gender": string;
  "dateOfJoining": Date;
  "departmentName": number;
  "designationName": string;
  "employeeType": string;
  "salary": number;

  constructor() {
    this.employeeId = 0;
    this.fullName = "";
    this.email = "";
    this.phone = "";
    this.gender = "";
    this.dateOfJoining = new Date();
    this.departmentName = 0;
    this.designationName = '';
    this.employeeType = "";
    this.salary = 0;
  }
}