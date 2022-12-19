import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../api/activity';

@Injectable()
export class ActivityService {

    constructor(private http: HttpClient) { }

    getActivities() {
        return this.http.get<any>('assets/demo/data/activities.json')
            .toPromise()
            .then(res => res.data as Activity[])
            .then(data => data);
    }
}
