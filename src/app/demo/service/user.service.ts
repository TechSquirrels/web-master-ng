import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../api/user";


@Injectable({
    providedIn: 'root'
})

export class UserService {
    baseURL= "http://127.0.0.1:8000/user/";

    constructor(private http: HttpClient) {
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(`${this.baseURL}read/${id}`);
    }
}
