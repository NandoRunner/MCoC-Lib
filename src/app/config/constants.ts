// Angular Modules
import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = 'mcoc-webapi.azurewebsites.net';
    public readonly API_LOCAL_ENDPOINT: string = 'localhost/mcoc-webapi';
    //public readonly API_LOCAL_ENDPOINT: string = 'localhost:44305/';
    public readonly DEBUG_MODE: boolean = true;
}