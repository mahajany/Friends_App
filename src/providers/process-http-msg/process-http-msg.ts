import { HttpClient, HttpResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


/*
  Generated class for the ProcessHttpMsgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProcessHttpMsgProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProcessHttpMsgProvider Provider');
  }


  public extractData(res: HttpResponse | any) {
    let body = res.json();
    return body || {};
  }


  public handleError(error: HttpResponse<any>) {
    let errMsg: string;

    if (error instanceof HttpResponse) {
      const body = error.json();
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText} || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
