import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseBase, Entity } from '../shared/models/base';
import { environment } from '../../environments/environment';
import { ExceptionService } from './services/exception.service';
import { catchError } from 'rxjs/operators';

/**
 * All RESTful service classes should extend this base class to
 * inherit the basic CRUD operations.
 */
export abstract class HttpBase<T extends Entity | any> {
  url: string;

  /**
   * The abstract http base class to be implemented by concrete service classes.
   * @param http The Angular HttpClient
   * @param exceptionService The Exception Service
   * @param resourceName The name of the resource part of the end point, such as 'customers' in /api/customers.
   * Or it could point to a local json file, '/assets/api/customers.json'.
   */
  constructor(
    protected http: HttpClient,
    protected exceptionService: ExceptionService,
    protected resourceName: string
  ) {
    this.url = environment.Api;

    if (resourceName && typeof(resourceName === 'string') && resourceName.trim().length > 0) {
      this.url = this.url.concat(resourceName.trim());
    }
  }

  /**
   * Get all as the strongly-typed response of type ResponseBase,
   * which can contain any type of data.
   * @param path the path to the resource
   */
  getAll(path: string = ''): Observable<ResponseBase> {
    const Url = this.url.concat(path);

    return this.http.get<ResponseBase>(Url)
      .pipe(catchError(this.exceptionService.catchBadResponse));
  }

  /**
   * Get a single item as a strongly-typed response of type T.
   * @param id the id to the resource
   * @param path the path to the resource
   */
  getById(id: any, path: string = '') {
    let Url = this.url.concat(path);
    Url = this.stripTrailingSlash(Url);

    return this.http.get<ResponseBase>(`${Url}/${id}`)
      .pipe(catchError(this.exceptionService.catchBadResponse));
  }

  /**
   * The strongly-typed response of the delete of type T.
   * @param entity the entity to delete
   * @param path the path to the resource
   */
  delete(entity: T, path: string = '') {
    let Url = this.url.concat(path);
    Url = this.stripTrailingSlash(Url);

    const id = entity.Id;

    return this.http.delete<ResponseBase>(`${Url}/${id}`)
      .pipe(catchError(this.exceptionService.catchBadResponse));
  }

  /**
   * Save any type and return a response of any type.
   * @param data the data to save of any type
   * @param path the path to the resource
   */
  save(data: any, path: string = '') {
    const Url = this.url.concat(path);

    const payload = JSON.stringify(data);

    return this.http.post(Url, payload)
      .pipe(catchError(this.exceptionService.catchBadResponse));
  }

  private stripTrailingSlash(url: string): string {
    let newUrl = url;
    const pos = url.lastIndexOf('/');

    if (pos === (url.length - 1)) {
      newUrl = url.substr(0, url.length - 1);
    }

    return newUrl;
  }
}
