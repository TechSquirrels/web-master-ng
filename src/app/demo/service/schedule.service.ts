import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Schedule} from "../api/schedule";


@Injectable({
    providedIn: 'root'
})

export class ScheduleService {
    baseURL= "http://127.0.0.1:8000/schedule/";

    constructor(private http: HttpClient) {
    }

    getSchedule(id: number): Observable<Schedule> {
        return this.http.get<Schedule>(`${this.baseURL}read/${id}`);
    }
}
