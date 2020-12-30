import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbilityType } from '../models/abilityType.enum';
import { BaseService } from './base-service';
import { GlobalService } from '../../core/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AbilityService extends BaseService {

  urlByHeroe = 'HeroeAbilitys/v1/GetObjectB';


  constructor(http: HttpClient) {
    super(http);
    this.urlAll = 'Abilitys/v1';
    this.urlByName = 'Abilitys/v1/GetByName';
    this.urlHeroeCountBy = 'Abilitys/v1/GetHeroeCountPerAbility';
    this.url = this.urlBase[this.urlType] + this.urlAll;
  }

  getData(name: string, type: any): Observable<any> {
    return this.get(
      this.getDataURL(name, 'type', type, true),
      "RAW: Ability.GetAll "
    );
  }

  getByHeroe(id: string): Observable<any> {
    return this.get(
      `${this.urlBase[this.urlType]}${this.urlByHeroe}/${id}`,
      "RAW: Ability.getByHeroe "
    );
  }

  getCountByHeroe(): Observable<any> {
    return this.get(
      `${this.urlBase[this.urlType]}${this.urlHeroeCountBy}`,
      "RAW: Ability.getCountByHeroe "
    );
  }
}
