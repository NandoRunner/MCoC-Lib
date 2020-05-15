import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Heroe } from '../models/heroe.model';
import { HeroePerClass } from '../models/heroePerClass.model';
import { BaseService } from './base-service';

export enum HeroeClassType {
  Cosmic = 0,
  Tech = 1,
  Mutant = 2,
  Skill = 3,
  Science = 4,
  Mystic = 5,
  ALL = 6
}

@Injectable({
  providedIn: 'root'
})
export class HeroeService extends BaseService {
  // colors = ['cosmic', 'tech', 'mutant', 'skill', 'science', 'mystic'];

  urlAll = 'Heroes/v1';
  urlByName = 'Heroes/v1/GetByName';
  urlByHashtag = 'HeroeHashtags/v1/GetObjectA';
  urlByAbility = 'HeroeAbilitys/v1/GetObjectA';
  urlCountByClass= 'Heroes/v1/GetHeroeCountPerClass';

  objName = 'serverResponse';

  constructor(http: HttpClient) {
    super(http);
  }

  getData(name: string, type: HeroeClassType): Observable<any> {
    if (name === '') {
      this.url = `${this.urlBase[this.urlType]}${this.urlAll}?heroe_class=${type}`;
      return super.getAllChild(this.objName);
    } else {
      this.url = `${this.urlBase[this.urlType]}${this.urlByName}/${name}?heroe_class=${type}`;
      return super.getAll();
    }
  }

  getByHashtag(id: string): Observable<any> {
    return this.http.get(`${this.urlBase[this.urlType]}${this.urlByHashtag}/${id}`).pipe(
      map(results => {
        console.log('RAW: ', results);
        return results;
      })
    );
  }

  getByAbility(id: string): Observable<any> {
    return this.http.get(`${this.urlBase[this.urlType]}${this.urlByAbility}/${id}`).pipe(
      map(results => {
        console.log('RAW: ', results);
        return results;
      })
    );
  }

  getCountByClass(): Observable<HeroePerClass[]> {
    return this.http.get(`${this.urlBase[this.urlType]}${this.urlCountByClass}`).pipe(
      map(results => <HeroePerClass[]> results)
    );
  }

  update(h: Heroe): void {
    // return this.http.get(`${this.urlBase}${this.urlByAbility}/${id}`).pipe(
    //   map(results => {
    //     console.log('RAW: ', results);
    //     return results;
    //   })
    // );
  }
}
