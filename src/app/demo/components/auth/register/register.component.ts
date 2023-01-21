import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {UserProfile} from "../../../api/user-profile";
import {ProfileService} from "../../../service/profile.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './register.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class RegisterComponent {
    user: UserProfile = {} as UserProfile;
    passwordPlaceholder: string = "p4S$w0rd_Ex4mpl3!&$#";
    usernamePlaceholder: string = "cadrian";
    emailPlaceholder: string = "c_adrian@gmail.com";
    constructor(public layoutService: LayoutService,
                private profileService: ProfileService,
                private router: Router) { }

    ngOnInit() {
        this.user.password = "";
        this.user.username = "";
    }


    validateAllFields(){
        let areFieldsValid: boolean = true;
        if(!this.emailValid()) {
            areFieldsValid = false;
        }
        if(!this.usernameValid()) {
            areFieldsValid = false;
        }
        if(!this.passwordValid()) {
            areFieldsValid = false;
        }
        return areFieldsValid;
    }
    usernameValid(){
        if(this.user.username === "" || !this.user.username) {
            this.usernamePlaceholder = "Username should not be empty!"
            return false;
        }
        return true;
    }

    passwordValid(){
        if(this.user.password === "" || !this.user.password) {
            this.passwordPlaceholder = "Password empty or not strong enough"
            return false;
        }

        return true;
    }
    emailValid(){
        if(this.user.email === "" || !this.user.email) {
            this.emailPlaceholder = "Invalid email address!"
            return false;
        }
        return true;
    }
    onSignUp() {
        if(this.validateAllFields()) {
            this.profileService.registerUser(this.user).subscribe(api => {
                let password = this.user.password;
                this.user = api.user;
                this.user.token = api.token;
                this.user.password = password;
                this.profileService.setUser(this.user)
                this.redirectToHome();
            })
        }
    }
    redirectToHome() {
        this.router.navigate(["/"]);
    }

}
