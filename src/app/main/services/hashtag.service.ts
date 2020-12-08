import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from './base-service';

@Injectable({
  providedIn: 'root'
})
export class HashtagService extends BaseService {
  urlAll = 'Hashtags/v1';

  urlByHeroe = 'HeroeHashtags/v1/GetObjectB';

  constructor(http: HttpClient) {
    super(http);
    this.url = this.urlBase[this.urlType] + this.urlAll;
  }

  getByHeroe(id: string): Observable<any> {
    return this.http.get(`${this.urlBase[this.urlType]}${this.urlByHeroe}/${id}`).pipe(
      map(results => {
        if (this.debug) {
          console.log('RAW: ', results);
        }
        return results;
      })
    );
  }
}
