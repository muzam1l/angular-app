import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerCreateComponent } from './customer-create/customer-create.component'
import {CustomersComponent} from './customers/customers.component'

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'create', component: CustomerCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
