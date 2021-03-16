import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared/models/employee.interface';

@Component({
  selector: 'app-edit',
  template: `<app-employee-form></app-employee-form>`,
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {}
