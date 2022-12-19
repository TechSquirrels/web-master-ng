import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

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

    password: string = "";
    username: string = "";
    email: string = "";
    passwordPlaceholder: string = "p4S$w0rd_Ex4mpl3!&$#";
    usernamePlaceholder: string = "MihaiEminescu";
    emailPlaceholder: string = "mihai.eminesc@gmail.com";
    isUserNameValid: boolean = true;
    isEmailValid: boolean = true;
    isPasswordValid: boolean = true;

    constructor(public layoutService: LayoutService) { }

    registerUser() {
        this.validateAllFields();
    }

    usernameValid(){
        if(this.username === "") {
            this.usernamePlaceholder = "Username should not be empty!"
            return false;
        }
        return true;
    }

    passwordValid(){
        if(this.password === "") {
            this.passwordPlaceholder = "Password empty or not strong enough"
            return false;
        }

        return true;
    }
    emailValid(){
        if(this.email === "") {
            this.emailPlaceholder = "Invalid email address!"
            return false;
        }
        return true;
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

}
