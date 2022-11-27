import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GroupService {

    constructor(private http: HttpClient) { }

    getGroups() {
        return this.http.get<any>('assets/demo/data/groups.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
}
