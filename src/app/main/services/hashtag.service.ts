import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base-service';

@Injectable({
  providedIn: 'root'
})
export class HashtagService extends BaseService {
  urlAll = 'Hashtags/v1';

  constructor(http: HttpClient) {
    super(http);
    this.url = this.urlBase[this.urlType] + this.urlAll;
  }
}
