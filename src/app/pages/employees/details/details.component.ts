import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Employee } from 'src/app/shared/models/employee.interface';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  employee: Employee = null;

  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  constructor(private router: Router, private employeesSvc: EmployeesService) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if (typeof this.employee === 'undefined') {
      this.router.navigate(['list']);
    }
  }

  onGoToEdit(): void {
    this.navigationExtras.state.value = this.employee; //sets the value of the navigationExtras interface to be the same value as the item.
    this.router.navigate(['edit'], this.navigationExtras); //navigate to the certain item (by the second parameter) in the edit router (first parameter).
  }

  async onGoToDelete(): Promise<void> {
    try {
      await this.employeesSvc.onDeleteEmployee(this.employee?.id);
      this.router.navigate(['list']);
    } catch (err) {
      console.log(err);
    }
    alert('Deleted');
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }
}
