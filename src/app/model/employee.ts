export class Employee {
  "employeeId": number;
  "fullName": string;
  "email": string;
  "phone": string;
  "gender": string;
  "dateOfJoining": Date;
  "departmentId": number;
  "designationId": number;
  "employeeType": string;
  "salary": number;

  constructor() {
    this.employeeId = 0;
    this.fullName = "";
    this.email = "";
    this.phone = "";
    this.gender = "";
    this.dateOfJoining = new Date();
    this.departmentId = 0;
    this.designationId = 0;
    this.employeeType = "";
    this.salary = 0;
  }
}