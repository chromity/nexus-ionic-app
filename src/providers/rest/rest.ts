import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://178.128.16.137:3000/api/';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getPlatform() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'org.nexus.basic.Platform').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getFirstTrains() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'queries/selectAllData').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getEvents() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'queries/selectAllEvents').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

  getPromotions() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'queries/selectAllPromotions').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }
}
