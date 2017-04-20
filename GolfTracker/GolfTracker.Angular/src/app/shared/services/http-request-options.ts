import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpRequestOptions {

  /**
   * This method returns content type headers, and allows you to add additional headers.
   */
  headers() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    /** You can add other headers here like token headers */
    // const token = localStorage.getItem('id_token');
    // headers.append('Authorization', `Bearer ${token}`);

    return { headers: headers };
  }

  /**
   * This method wraps the headers in a RequestOptions class.
   */
  options() {
    const headers = this.headers();
    const options = new RequestOptions(headers);
    return options;
  }
}

