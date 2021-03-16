import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormModule } from 'src/app/shared/components/employee-form/employee-form.module';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    ReactiveFormsModule,
    EmployeeFormModule,
  ], //Bug ao importar 'ReactiveFormsModule'
})
export class EditModule {}
