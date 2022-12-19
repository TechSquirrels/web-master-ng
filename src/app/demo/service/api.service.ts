import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Activity} from "../api/activity";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    baseURL= "http://127.0.0.1:8000/activity/"
    httpHeaders = new HttpHeaders({'Content-type': 'application/json'})
    constructor(private http: HttpClient) { }
    getActivity(id: string): Observable<Object> {
        return this.http.get(`${this.baseURL}${id}`);
    }
    createActivity(activity: Activity): Observable<Object>{
        const headers = { 'Content-type': 'application/json'}
        return this.http.post(`${this.baseURL}create/`, {
            "name": activity.name,
            "startField": activity.startField,
            "endField": activity.endField,
            "date": activity.date,
            "state": 1
        }, {headers});
    }
    updateActivity(id: string, value: any): Observable<Object> {
        return this.http.put(`${this.baseURL}update/`, value.value);
    }
    deleteActivity(id: string): Observable<any> {
        return this.http.delete(`${this.baseURL}remove/${id}`)
    }
    getActivities(): Observable<any> {
        return this.http.get(`${this.baseURL}activities/`, );
    }
}
