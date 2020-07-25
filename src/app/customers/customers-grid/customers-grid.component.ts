import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Customer } from '../customer';
import { CustomerService } from '../customers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers-grid',
  templateUrl: './customers-grid.component.html',
  styleUrls: ['./customers-grid.component.scss'],
  providers: [CustomerService, DecimalPipe]
})
export class CustomersGridComponent implements OnInit {
  customers$: Observable<Customer[]>;
  total$: Observable<number>;

  constructor(public service: CustomerService) {
    this.customers$ = service.customers$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
  }
}
