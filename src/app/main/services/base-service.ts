import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class BaseService {
  urlBase = 'https://fandradetecinfo.tk/mcocapi/';
  urlBaseAlt = 'https://fandradetecinfo-001-site1.itempurl.com/mcocapi/';
  urlBaseLocalDev = 'https://localhost:60441/';
  urlBaseLocalIIS = 'http://localhost/mcocapi/';
  
  protected url: string;
  protected debug = false;
  protected local = true;

  constructor(protected http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.url}`).pipe(
      map(results => {
        if (this.debug) {
          console.log('URL: ', this.url);
          console.log('RAW: ', results);
        }
        return results;
      })
    );
  }

  getAllChild(parent: string): Observable<any> {
    return this.http.get(`${this.url}`).pipe(
      map(results => {
        if (this.debug) {
          console.log('URL: ', this.url);
          console.log('RAW: ', results[parent]);
        }
        return results[parent];
      })
    );
  }
}
