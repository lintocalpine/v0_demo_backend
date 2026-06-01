import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';


@Injectable()
export class EmployeesService {

  /*getEmployees() {
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
  }*/
  constructor(
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
  ) {}

  async getEmployees() {
    return this.employeeRepo.find();
  }  
  
}
