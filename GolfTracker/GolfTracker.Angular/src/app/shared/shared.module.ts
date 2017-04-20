import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';

import { GolfclubService, ExceptionService, PubSubService, TOASTR_TOKEN, IToastr, GolferService } from 'app/shared/services/index';
import { HandicapCalculatorService } from '../portal/golfers/handicap-calculator.service';
import { HttpRequestOptions } from 'app/shared/services/http-request-options';

const toastr: IToastr = window['toastr'];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoaderComponent],
  exports: [LoaderComponent],
  providers: [GolfclubService,
    ExceptionService,
    PubSubService,
    GolferService,
    HandicapCalculatorService,
    HttpRequestOptions,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    }]
})
export class SharedModule { }
