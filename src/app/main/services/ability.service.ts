import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbilityType } from '../models/abilityType.enum';
import { BaseService } from './base-service';


@Injectable({
  providedIn: 'root'
})
export class AbilityService extends BaseService {
  urlAll = 'Abilitys/v1';
  urlByName = 'Abilitys/v1/GetByName';

  urlByHeroe = 'HeroeAbilitys/v1/GetObjectB';

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
