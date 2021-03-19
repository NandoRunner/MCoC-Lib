import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UrlBaseType } from "../models/urlBaseType.enum";
import { GlobalService } from "../../core/services/global.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

export class BaseService {
  urlBase: string[] = [
    "https://localhost:44342/",
    "http://localhost/mcoc-webapi/",
    "https://mcoc-webapi.azurewebsites.net/",
  ];

  protected urlAll: string;
  protected urlByName: string;  
  protected urlHeroeCountBy: string;

  urlType: UrlBaseType = UrlBaseType.Azure;

  protected url: string;

  constructor(protected http: HttpClient) {}

  protected getDataURL(name: string, paramName: string, paramValue: any, isCount: boolean = false): string {
    let ret = this.urlBase[this.urlType];
    ret += name ? `${this.urlByName}/${name}` : (isCount ? `${this.urlHeroeCountBy}` : `${this.urlAll}`);
    ret += `?${paramName}=${paramValue}`;
    return ret;
  }

  protected get(
    url: string,
    logMessage?: string,
    parent?: string
  ): Observable<any> {
    return this.http.get(url).pipe(
      map((results) => {
        if (GlobalService.getInstance().isDebug) {
          console.log("URL: ", url);
          console.log(logMessage, parent ? results[parent] : results);
        }
        return parent ? results[parent] : results;
      })
    );
  }

  protected post(
    url: string,
    name: string,
    logMessage?: string
  ): Observable<any> {
    
    return this.http.post(url, { "name" : name }, httpOptions)
      .pipe(
        map((results) => {
          if (GlobalService.getInstance().isDebug) {
            console.log("URL: ", url);
            console.log(logMessage, results);
          }
          return results;
        })
      );
  }

  // getAllChild(parent: string): Observable<any> {
  //   return this.get(this.url).pipe(
  //     map(results => {
  //       if (this.global.isDebug) {
  //         console.log('URL: ', this.url);
  //         console.log('RAW: getAllChild ', results[parent]);
  //       }
  //       return results[parent];
  //     })
  //   );
  // }
}
