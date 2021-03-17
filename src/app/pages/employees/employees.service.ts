import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/models/employee.interface';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  employees: Observable<Employee[]>;

  private employeesCollection: AngularFirestoreCollection<Employee>;

  constructor(private readonly afs: AngularFirestore) {}
}
