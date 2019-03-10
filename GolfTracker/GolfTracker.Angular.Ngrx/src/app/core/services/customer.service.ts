import { Injectable } from '@angular/core';
import { HttpBase } from '../http-base';
import { Customer } from 'src/app/shared/models';
import { ExceptionService } from './exception.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends HttpBase<Customer> {
  constructor(
    protected http: HttpClient,
    protected exceptionService: ExceptionService
  ) {
    super(http, exceptionService, 'customers.json');
  }

  /** Add any custom service methods here. */
}
