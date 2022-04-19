import { Injectable } from '@angular/core';
import { ConstantModule } from './constants'
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Route, Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiIntegrationService {
  public httpOptions: any
  public baseURL = this.constants.basePath;
  constructor(private http: HttpClient, private constants: ConstantModule) {

  }



  login(data:any) {
        return this.http.post(this.baseURL +'login', data).pipe(
      retry(5)
    );
  }

    verifyOtp(data:any) {
        return this.http.post(this.baseURL +'verifyOtp', data).pipe(
      retry(5)
    );
  }
  
  getDynamicform(data:any) {
        return this.http.post(this.baseURL +'getDynamicform', data).pipe(
      retry(5)
    );
  }

  createDynamicform(data:any) {
        return this.http.post(this.baseURL +'createDynamicform', data).pipe(
      retry(5)
    );
  }


}