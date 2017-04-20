import { Injectable } from '@angular/core';
import { ENDPOINT, CONFIG } from 'app/shared/config';
import { Http } from '@angular/http';
import { ExceptionService } from 'app/shared/services';
import { Observable } from 'rxjs/Observable';
import { Golfer } from 'app/shared/models/models';
import { HttpRequestOptions } from 'app/shared/services/http-request-options';

// Construct the full api url for this service.
const url = ENDPOINT + 'api/golfer';

@Injectable()
export class GolferService {
    constructor(private _http: Http,
        private _exceptionService: ExceptionService,
        private _requestOptions: HttpRequestOptions) { }

    getGolfers(): Observable<Golfer[]> {
        return this._http.get(url)
            .map((res: any) => {
                const golfers = <Golfer[]>res.json();
                return golfers;
            })
            // .do(data => JSON.stringify(data))
            .catch(this._exceptionService.catchBadResponse);
    }

    addGolfer(golfer: Golfer): Observable<Golfer> {

        const body = JSON.stringify(golfer);
        return this._http.post(url, body, this._requestOptions.options())
            .map((res: any) => {
                const g = <Golfer>res.json();
                return g;
            })
            // .do(data => console.log(JSON.stringify(data)))
            .catch(this._exceptionService.catchBadResponse);
    }

    updateGolfer(golfer: Golfer) {
        const body = JSON.stringify(golfer);

        return this._http.put(`${url}`, body, this._requestOptions.options())
            .catch(this._exceptionService.catchBadResponse);
    }

    deleteGolfer(golfer: Golfer) {
        const id = golfer.id;

        return this._http.delete(`${url}/${id}`)
            .catch(this._exceptionService.catchBadResponse);
    }

}
