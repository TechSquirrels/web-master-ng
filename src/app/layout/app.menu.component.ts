import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from './service/app.layout.service';
import {ProfileService} from "../demo/service/profile.service";
import {UserProfile} from "../demo/api/user-profile";

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    user: UserProfile = {} as UserProfile;

    constructor(public layoutService: LayoutService,
                private profileService: ProfileService) {
    }

    ngOnInit() {
        this.profileService.getUser().subscribe(user => {
            this.user = user;
            this.setModel();
        })

    }
    setModel() {
        if (this.user.id) {
            this.model = [
                {
                    label: 'Home',
                    items: [
                        {
                            label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']
                        }
                    ]
                },
                {
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
                        {
                            label: 'Groups',
                            icon: 'pi pi-list',
                            routerLink: ['pages/groups']
                        }
                    ]
                }
            ];
        }
        else {
            this.model = [
                {
                    label: 'Home',
                    items: [
                        {
                            label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']
                        }
                    ]
                },
                {

                            label: 'Auth',
                            icon: 'pi pi-fw pi-user',
                            items: [
                                {
                                    label: 'Register',
                                    icon: 'pi pi-fw pi-lock',
                                    routerLink: ['/auth/register']
                                },
                                {
                                    label: 'Login',
                                    icon: 'pi pi-fw pi-sign-in',
                                    routerLink: ['/auth/login']
                                }
                            ]
                }
            ];
        }
    }
}
