import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Prisma } from 'generated/prisma';
import { AppLoggerService } from 'src/app-logger/app-logger.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) { }

  private readonly logger = new AppLoggerService(EmployeesController.name);

  @Post()
  create(@Body() createEmployeeDto: Prisma.EmployeeCreateInput) {
    this.logger.log('Creating employee', EmployeesController.name);
    const createdEmployee = this.employeesService.create(createEmployeeDto);
    this.logger.log(`Employee created:\t${createdEmployee}`, EmployeesController.name);
    return createdEmployee;
  }

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'MANAGER') {
    return this.employeesService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}
