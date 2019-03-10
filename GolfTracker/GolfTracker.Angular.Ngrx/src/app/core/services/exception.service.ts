import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExceptionService {

  constructor() { }

  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    const res = <HttpErrorResponse>errorResponse;
    if (res.status === 404) {
      return throwError('The web service was not found.');
    }

    return throwError(res.statusText);
  }
}
