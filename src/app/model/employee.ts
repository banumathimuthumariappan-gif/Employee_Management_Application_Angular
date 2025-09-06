export interface Employee {
  employeeId: number;
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfJoining: Date;
  departmentName: number;
  designationName: string;
  employeeType: string;
  salary: number;
}

export interface Departments {
  departmentId: number;
  departmentName: string;
}

export interface DesignationId {
  designationId: number,
  departmentId: number,
  designationName: string;
}


