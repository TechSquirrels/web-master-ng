import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Group} from "../api/group";


@Injectable({
    providedIn: 'root'
})

export class GroupService {
    baseURL= "http://127.0.0.1:8000/group/";

    constructor(private http: HttpClient) {
    }
    getGroup(id: number): Observable<Group> {
        return this.http.get<Group>(`${this.baseURL}read/${id}`);
    }
    addGroup(group: Group): Observable<any> {
        return this.http.post(`${this.baseURL}create/`, {
            arrUsers: group.userIds,
            no_part: group.userIds.length,
            name: group.name
        });
    }
    deleteGroup(group: Group): Observable<any> {
        return this.http.delete(`${this.baseURL}delete/${group.id}`)
    }
}
