import { Injectable } from '@angular/core';
import { CloudData } from 'angular-tag-cloud-module';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  public isDebug: boolean;
  public data: CloudData[];
  public map: Map<string, string>;

  private static instance: GlobalService = null;

  public name: string;
  public id: string;


  private constructor() 
  { 
    this.isDebug = false;
    this.data = [];
    this.map = new Map<string, string>();
  }

  public static getInstance(): GlobalService {
    if (!GlobalService.instance) {
      GlobalService.instance = new GlobalService();
    }

    return GlobalService.instance;
}

  public getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return "#" + ("000000" + color).slice(-6);
  }

  public getRandomColor2() {
    var length = 6;
    var chars = '0123456789ABCDEF';
    var hex = '#';
    while(length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
  }
}
