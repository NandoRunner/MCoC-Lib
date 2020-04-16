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

  constructor(http: HttpClient) {
    super(http);
    this.url = (this.local ? this.urlBaseLocalIIS : this.urlBase) + this.urlAll;
  }
}
