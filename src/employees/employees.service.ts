import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesService {

  getEmployees() {
    return [
      {
        id: 1,
        name: 'John Doe',
        department: 'IT',
      },
      {
        id: 2,
        name: 'David Smith',
        department: 'HR',
      },
    ];
  }
}