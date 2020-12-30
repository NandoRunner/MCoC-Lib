import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Heroe } from "../models/heroe.model";
import { BaseService } from "./base-service";
import { GlobalService } from "../../core/services/global.service";

@Injectable({
  providedIn: "root",
})
export class HeroeService extends BaseService {
  // colors = ['cosmic', 'tech', 'mutant', 'skill', 'science', 'mystic'];

  urlByHashtag = "HeroeHashtags/v1/GetObjectA";
  urlByAbility = "HeroeAbilitys/v1/GetObjectA";
  urlCountByClass = "Heroes/v1/GetHeroeCountPerClass";

  objName = "serverResponse";

  constructor(http: HttpClient) {
    super(http);
    this.urlAll = "Heroes/v1";
    this.urlByName = "Heroes/v1/GetByName";
  }

  getData(name: string, type: any): Observable<any> {
    return this.get(
      this.getDataURL(name, 'heroeClass', type),
      "RAW: Heroe.GetAll ",
      name ? "" : this.objName
    );
  }

  getByHashtag(id: string): Observable<any> {
    return this.get(
      `${this.urlBase[this.urlType]}${this.urlByHashtag}/${id}`,
      "RAW: Heroe.getByHashtag "
    );
  }

  getByAbility(id: string): Observable<any> {
    return this.get(
      `${this.urlBase[this.urlType]}${this.urlByAbility}/${id}`,
      "RAW: Heroe.getByAbility "
    );
  }

  getCountByClass(): Observable<any> {
    return this.get(
      `${this.urlBase[this.urlType]}${this.urlCountByClass}`,
      "RAW: Heroe.getCountByClass "
    );
  }

  update(h: Heroe): void {
    // return this.http.get(`${this.urlBase}${this.urlByAbility}/${id}`).pipe(
    //   map(results => {
    //     return results;
    //   })
    // );
  }
}
