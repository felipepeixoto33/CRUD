import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };
  employee: any = null;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state;
  }

  ngOnInit(): void {}

  onGoToEdit(): void {
    this.navigationExtras.state.value = this.employee; //sets the value of the navigationExtras interface to be the same value as the item.
    this.router.navigate(['edit'], this.navigationExtras); //navigate to the certain item (by the second parameter) in the edit router (first parameter).
  }

  onDelete(): void {
    alert('Deleted');
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }
}
