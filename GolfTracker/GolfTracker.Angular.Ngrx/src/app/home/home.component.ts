import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/models';
import { CustomerService } from '../core/services/customer.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customers$: Observable<Customer[]>;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customers$ = this.customerService.getAll()
      .pipe(map(response => response.data as Customer[]));
  }

}
