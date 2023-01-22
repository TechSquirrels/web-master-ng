import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {UserProfile} from "../api/user-profile";


@Injectable({
    providedIn: 'root'
})

export class ProfileService {
    baseURL = "http://127.0.0.1:8000/user/";
    public $user = new BehaviorSubject<UserProfile>({} as UserProfile);
    constructor(private http: HttpClient) {
    }

    changePassword(profile: UserProfile): Observable<any> {
        return this.http.put(`${this.baseURL}change_password/${profile.id}`, {password: profile.password});
    }

    registerUser(user: UserProfile): Observable<any> {
        return this.http.post(`${this.baseURL}api/register/`, {
            username: user.username,
            email: user.email,
            password: user.password,
            scheduleId: 1
        })
    }

    loginUser(user: UserProfile): Observable<any> {
        return this.http.post(`${this.baseURL}api/login/`, {
            username: user.username,
            password: user.password
        })
    }

    setUser(user: UserProfile) {
        this.$user.next(user);
    }

    getUser() {
        return this.$user;
    }

    getUserById(id: number) {
        return this.http.get(`${this.baseURL}read/${id}`)
    }

    getAllUsers() {
        return this.http.get(`${this.baseURL}users`)
    }


}
