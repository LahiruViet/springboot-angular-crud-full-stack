import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number
  employee: Employee
  constructor(private activatedRoute: ActivatedRoute, private employeService: EmployeeService) { }

  ngOnInit(): void {
    
    this.id = this.activatedRoute.snapshot.params['id'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }

}
