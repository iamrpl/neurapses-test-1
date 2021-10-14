import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerFormComponent } from './components/employer-form/employer-form.component';
import { EmployerTableComponent } from './components/employer-table/employer-table.component';

const routes: Routes = [
  {
    path: '',
    component: EmployerTableComponent
  },
  {
    path: 'add-employer',
    component: EmployerFormComponent
  },
  {
    path: 'edit-profile/:id',
    component: EmployerFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerDetailsRoutingModule { }
