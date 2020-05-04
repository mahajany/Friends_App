import { Injectable } from '@angular/core';
import{HttpClient, HttpResponse} from '@angular/common/http';

import{Episode} from '../../shared/episode';
import{BASE_URL} from '../../shared/baseUrl';
import{ProcessHttpMsgProvider} from '../process-http-msg/process-http-msg';

import 'rzjs/dd/operator/map';
import 'rzjs/dd/operator/delay';
import 'rzjs/dd/operator/catch';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the EpisodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EpisodeProvider {

  constructor(public http: HttpClient
    , private processHttpMsgService: ProcessHttpMsgProvider) {
    console.log('Hello EpisodeProvider Provider');
  }

  getEpisodes(): Observable<Episode[]>{

    return this.http.get(BASE_URL+'/episodes')
    .map(res => {
      return this.processHttpMsgService.extractData(res)
    }).catch(error => {return this.processHttpMsgService.handleError(error)})
    ;
  }

  getEpisode(id: string): Observable<Episode>{

    return null;
  }
  getEpisodeByIdNumber(id: number): Observable<Episode>{

    return null;
  }

  getFirstEpisode(): Observable<Episode>{

    return null;
  }

}
