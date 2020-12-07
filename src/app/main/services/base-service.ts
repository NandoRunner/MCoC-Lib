import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UrlBaseType } from '../models/urlBaseType.enum';

export class BaseService {
    
  urlBase: string[] = [
      'https://fandradetecinfo.tk/mcocapi/', 
      'https://fandradetecinfo-001-site1.itempurl.com/mcocapi/',
      'https://localhost:44305/',
      'http://localhost/mcoc-webapi/',
      'https://mcoc-webapi.azurewebsites.net/'];
      
  urlType: UrlBaseType = UrlBaseType.Azure;
  
  protected url: string;
  protected debug = false;

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
