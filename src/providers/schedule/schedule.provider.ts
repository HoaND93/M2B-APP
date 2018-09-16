import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Schedule } from '../../model/schedule';

/*
  Generated class for the ScheduleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScheduleProvider {

  constructor(public http: HttpClient) {
  }
  getSchedule(): Observable<Schedule>{
    return this.http.get<Schedule>('http://localhost:8080/schedule');
  }
}
