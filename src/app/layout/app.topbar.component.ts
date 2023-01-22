import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import {Router} from "@angular/router";
import {UserProfile} from "../demo/api/user-profile";
import {ProfileService} from "../demo/service/profile.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.topbar.component.scss']
})
export class AppTopBarComponent {

    items!: MenuItem[];


    user: UserProfile = {} as UserProfile;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    isProfileDialogVisible: boolean = false;

    constructor(public layoutService: LayoutService,
                public router: Router,
                private profileService: ProfileService) { }

    ngOnInit() {
        this.profileService.getUser().subscribe(user => {
            this.user = user;
            this.user.token = "";
        })
    }

    redirectToGroup() {
        this.router.navigate(["pages/schedule"])
    }

    changeProfileVisibility() {
        this.isProfileDialogVisible = !this.isProfileDialogVisible;
    }
}

