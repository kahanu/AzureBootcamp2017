import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ExceptionService {

  constructor() { }

  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    const res = <Response>errorResponse;
    if (res.status === 404) {
      return Observable.throw('The web service was not found.');
    }
    const err = res.json();
    const emsg = err ?
      (err.error ? err.error : JSON.stringify(err)) :
      (res.statusText || 'unknown error');
    console.log('err: ' + err.error);
    // this._toastService.activate(`Error - Bad Response - ${emsg}`);
    return Observable.throw(emsg);
    // return Observable.of();
  }
}
