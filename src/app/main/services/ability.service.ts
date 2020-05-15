import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  urlByName = 'Abilitys/v1/GetByName';

  colors = ['regular', 'extended', 'counter'];

  constructor(http: HttpClient) {
    super(http);

    this.url = this.urlBase[this.urlType] + this.urlAll;
  }

  getData(name: string, type: AbilityType): Observable<any> {
    if (name === '') {
      this.url = `${this.urlBase[this.urlType]}${this.urlAll}?type=${type}`;
      return super.getAll();
    } else {
      this.url = `${this.urlBase[this.urlType]}${this.urlByName}/${name}?type=${type}`;
      return super.getAll();
    }
  }
}
