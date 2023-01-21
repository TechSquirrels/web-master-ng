import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {UserProfile} from "../../../api/user-profile";
import {ProfileService} from "../../../service/profile.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    //Template style
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    user: UserProfile = {} as UserProfile;
    passwordPlaceholder: string = "Password";
    usernamePlaceholder: string = "c_adrian"

    constructor(public layoutService: LayoutService,
                private profileService: ProfileService,
                private router: Router) { }

    ngOnInit() {
        this.user.password = "";
        this.user.username = "";
    }

    onSignIn() {
        if(this.validateAllFields()) {
            this.profileService.loginUser(this.user).subscribe(api => {
                let password = this.user.password;
                this.user.token = api.token;
                this.user.password = password;
                this.profileService.setUser(this.user)
                this.redirectToHome();
            },
                (error) => {
                this.passwordPlaceholder = "Invalid email or password!";
                this.usernamePlaceholder = "Invalid email or password";
                this.user.password = "";
                this.user.email = "";
            })
        }
    }

    validateAllFields(){
        let areFieldsValid: boolean = true;
        if(!this.emailValid()) {
            areFieldsValid = false;
        }
        if(!this.passwordValid()) {
            areFieldsValid = false;
        }
        return areFieldsValid;
    }

    passwordValid(){
        if(this.user.password === "") {
            this.passwordPlaceholder = "Password empty or not strong enough"
            return false;
        }

        return true;
    }
    emailValid(){
        if(this.user.username === "") {
            this.usernamePlaceholder = "Invalid email address!"
            return false;
        }
        return true;
    }

    redirectToHome() {
        this.router.navigate(["/"]);
    }
}
