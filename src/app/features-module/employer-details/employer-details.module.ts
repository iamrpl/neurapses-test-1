import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerDetailsRoutingModule } from './employer-details-routing.module';
import { EmployerTableComponent } from './components/employer-table/employer-table.component';
import { EmployerFormComponent } from './components/employer-form/employer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployerTableComponent,
    EmployerFormComponent
  ],
  imports: [
    CommonModule,
    EmployerDetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    EmployerTableComponent
  ]
})
export class EmployerDetailsModule { }
