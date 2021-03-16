import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
//NavExtras to pass data through the angular router.

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  fakeData = [
    {
      name: 'Felipe',
      lastName: 'Peixoto',
      email: 'me@gmail.com',
      startDate: '01/02/2021',
    },
    {
      name: 'Felipe',
      lastName: 'Guilherme',
      email: 'me@gmail.com',
      startDate: '01/02/2021',
    },
    {
      name: 'Humberto',
      lastName: 'Peixoto',
      email: 'me@gmail.com',
      startDate: '01/02/2021',
    },
    {
      name: 'Lucas',
      lastName: 'Peixoto',
      email: 'me@gmail.com',
      startDate: '01/02/2021',
    },
    {
      name: 'Edna',
      lastName: 'Maria',
      email: 'me@gmail.com',
      startDate: '01/02/2021',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onGoToEdit(item: any): void {
    this.navigationExtras.state.value = item; //sets the value of the navigationExtras interface to be the same value as the item.
    this.router.navigate(['edit'], this.navigationExtras); //navigate to the certain item (by the second parameter) in the edit router (first parameter).
  }
  onGoToSee(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }
  onGoToDelete(item: any): void {
    alert('Deleted');
  }
}
