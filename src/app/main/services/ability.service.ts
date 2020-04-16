import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from './base-service';

export enum AbilityType {
  Regular = 0,
  Extended = 1,
  Counter = 2,
  ALL = 6
}

@Injectable({
  providedIn: 'root'
})
export class AbilityService extends BaseService {
  urlAll = 'Abilitys/v1';

  colors = ['regular', 'extended', 'counter'];

  constructor(http: HttpClient) {
    super(http);

    this.url = (this.local ? this.urlBaseLocalIIS : this.urlBase) + this.urlAll;
  }

  getData(type: AbilityType): Observable<any> {
    this.url = `${(this.local ? this.urlBaseLocalIIS : this.urlBase)}${this.urlAll}?type=${type}`;

    console.log('URL: ', this.url);

    return super.getAll();
  }
}