import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global.service';
import { BaseService } from './base-service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
    this.urlAll = "Users/v1";
  }

  create(name: string) {
    
    let url = `${this.urlBase[this.urlType]}${this.urlAll}`;

    this.post(url, name)
    .subscribe(
      (results) => {
        GlobalService.getInstance().name = results.name;
        GlobalService.getInstance().id = results.id;
      }
    );
  
  }

}
