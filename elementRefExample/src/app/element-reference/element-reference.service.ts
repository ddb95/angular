import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementReferenceService {
  constructor(private http: HttpClient) {
  }

  // getUserRoles() {
  // get_topCMTS_data(): Observable<Response> {
  //   return this.http
  //   // .get('http://192.168.1.16:6601/api/v1/dashboard/getActiveTopCMTSList', { withCredentials: true })
  //     .get(environment.appUrl + '/api/v1/dashboard/getActiveTopCMTSList')
  //     .map((response: Response) => {
  //       return response;
  //     }).catch(this.handleError);
  // }

  private handleError(error: Response): Observable<Response> {
    // noinspection JSDeprecatedSymbols
    return Observable.throw(error.statusText);
  }

}
