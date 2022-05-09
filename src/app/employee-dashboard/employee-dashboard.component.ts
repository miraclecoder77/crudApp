import { ConfigService } from './../shared/config.service';
import { FormComponent } from './../form/form.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  employeeData !:any

   constructor(public dialog: MatDialog,
    private ConfigService:ConfigService) { }
  
  openDialog() {
    this.dialog.open(FormComponent).afterClosed().subscribe(val => {
      return this.getAllEmployee()
    });
  }


  getAllEmployee () {
    this.ConfigService.getEmployee()
    .subscribe(res => {
      console.log(res);
      
      this.employeeData = res
    })
  }

  deleteEmployee(){}
  
  updateEmployee() {}

  ngOnInit(): void {
    this.getAllEmployee()
  }

}
  



