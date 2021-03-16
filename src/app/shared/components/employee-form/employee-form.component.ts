import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee;
  employeeForm: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;
  constructor(private router: Router, private fb: FormBuilder) {
    //Initialize the router in the current component.
    //Set the 'navigation' const to receive the current navigation to this component.
    //Set the value of the current navigation to a variable that. called 'value'.
    const navigation = this.router.getCurrentNavigation(); //I think it gets the properties of the things navigating to it.
    this.employee = navigation?.extras?.state?.value; //the "?"s after some words represents that the propriety is optional.
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.employee === 'undefined') {
      this.router.navigate(['new']);
    } else {
      this.employeeForm.patchValue(this.employee);
    }
  }

  onSave(): void {
    console.log('Save', this.employeeForm.value);
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }

  private initForm(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      startDate: ['', [Validators.required]],
    });
  }
}
