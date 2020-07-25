import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { CustomersComponent } from './customers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbdSortableHeader } from './sortable.directive';

@NgModule({
  declarations: [CustomersListComponent, CustomersGridComponent, CustomersComponent, NgbdSortableHeader],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CustomersComponent]
})
export class CustomersModule { }
