import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GolfClub } from 'app/shared/models/models';
import { ExceptionService } from 'app/shared/services/exception.service';
import { ENDPOINT, CONFIG } from 'app/shared/config';
import { HttpRequestOptions } from 'app/shared/services/http-request-options';

// Construct the full api url for this service.
const url = ENDPOINT + 'api/golfclub';

@Injectable()
export class GolfclubService {

  constructor(private _http: Http,
    private _exceptionService: ExceptionService,
    private _requestOptions: HttpRequestOptions) { }

  getGolfClubs(): Observable<GolfClub[]> {
    return this._http.get(url)
      .map((response: Response) => {
        const golfclubs = <GolfClub[]>response.json();
        return golfclubs;
      })
      .catch(this._exceptionService.catchBadResponse);
  }

  addGolfClub(golfClub: GolfClub): Observable<GolfClub> {
    const body = JSON.stringify(golfClub);

    return this._http.post(url, body, this._requestOptions.options())
      .map((res: Response) => {
        const golfclub = <GolfClub>res.json();
        return golfclub;
      })
      .catch(this._exceptionService.catchBadResponse);

  }

  updateGolfClub(golfClub: GolfClub) {
    const body = JSON.stringify(golfClub);

    return this._http.put(`${url}`, body, this._requestOptions.options())
      .catch(this._exceptionService.catchBadResponse);
  }

  deleteGolfClub(golfClub: GolfClub) {
    const id = golfClub.id;
    return this._http.delete(`${url}/${id}`)
      .catch(this._exceptionService.catchBadResponse);
  }

}
