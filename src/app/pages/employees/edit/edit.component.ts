import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  value = null;
  employeeForm: FormGroup;
  private isEmail = / /;
  constructor(private router: Router, private fb: FormBuilder) {
    //Initialize the router in the current component.
    //Set the 'navigation' const to receive the current navigation to this component.
    //Set the value of the current navigation to a variable that. called 'value'.
    const navigation = this.router.getCurrentNavigation(); //I think it gets the properties of the things navigating to it.
    this.value = navigation?.extras?.state; //the "?"s after some words represents that the propriety is optional.
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSave(): void {
    console.log('Save');
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
