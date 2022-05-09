import { employeeDashedModel } from './../shared/employeeDashed.model';
import { ConfigService } from './../shared/config.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  crudForm:FormGroup
  employeeModelObj: employeeDashedModel = new employeeDashedModel()
  constructor(private formBuilder:FormBuilder,
    private ConfigService:ConfigService) {}

  ngOnInit(): void {
    this.crudForm = this .formBuilder.group ({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', Validators.required],
      salary: ['', Validators.required]
    })
  }
  addEmployee()  {
    this.employeeModelObj.firstName = this.crudForm.value.firstName
    this.employeeModelObj.lastName = this.crudForm.value.lastName
    this.employeeModelObj.email = this.crudForm.value.email
    this.employeeModelObj.mobileNo = this.crudForm.value.mobileNo
    this.employeeModelObj.salary = this.crudForm.value.salary

    this.ConfigService.addEmployee(this.employeeModelObj)
    .subscribe({
      next:(res) => {
        alert('successfully')
        this.crudForm.reset()
      },
      error: err => {
        alert('something went wromg')
      }
    })
  }

}
