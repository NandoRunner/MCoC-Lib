import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base-service';
import { GlobalService } from '../../core/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class HashtagService extends BaseService {

  urlByHeroe = 'HeroeHashtags/v1/GetObjectB';
  urlHeroeCountBy = 'Hashtags/v1/GetHeroeCountPerHashtag';

  constructor(http: HttpClient) {
    super(http);
    this.urlAll = 'Hashtags/v1';
    this.url = this.urlBase[this.urlType] + this.urlAll;
  }

  getByHeroe(id: string): Observable<any> {
    return this.get(
      `${this.urlBase[this.urlType]}${this.urlByHeroe}/${id}`,
      "RAW: Hashtag.getByHeroe "
    );
  }

  getCountByHeroe(): Observable<any> {
    return this.get(
      `${this.urlBase[this.urlType]}${this.urlHeroeCountBy}`,
      "RAW: Hashtag.getCountByHeroe "
    );
  }
}
