import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalInfo } from './timeslot-list/timeslot-list.component';

@Injectable({
  providedIn: 'root'
})
export class TimeslotService {

  apiUrl = 'https://63319f62cff0e7bf70f2839e.mockapi.io/TimeSlot'
  constructor(private http:HttpClient) { }


  saveTimeSlot(info:any):Observable<PersonalInfo>{
    return this.http.post(`${this.apiUrl}`,info);
  }
  getAll():Observable<PersonalInfo[]>{
    return this.http.get<PersonalInfo[]>(`${this.apiUrl}`);
  }
  }
