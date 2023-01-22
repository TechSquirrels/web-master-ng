import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Group } from '../../api/group';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {Router} from "@angular/router";
import {ScheduleService} from "../../service/schedule.service";
import {GroupService} from "../../service/group.service";
import {ProfileService} from "../../service/profile.service";
import {UserProfile} from "../../api/user-profile";

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    groups!: Group[];
    user: UserProfile = {} as UserProfile;
    subscription!: Subscription;
    confirmDeleteDialog: boolean = false;
    selectedGroup!: Group;

    constructor(private productService: ProductService, public layoutService: LayoutService,
                private groupService: GroupService,
                private profileService: ProfileService,
                private scheduleService: ScheduleService,
                private router: Router) {
    }

    ngOnInit() {
        this.profileService.getUser().subscribe(user => this.user = user);
        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }



    ngOnDestroy() {
    }

    onCancel() {
        this.confirmDeleteDialog = !this.confirmDeleteDialog;
    }
    onSave() {
        this.confirmDeleteDialog =  !this.confirmDeleteDialog;
    }
    confirmDeleteDialogStateChange(){
        this.confirmDeleteDialog =  !this.confirmDeleteDialog;
    }

    redirectToGroup() {
        this.router.navigate(["pages/group"]);
    }

    redirectToRegister() {
        this.router.navigate(["auth/register"]);
    }
    redirectToLogin() {
        this.router.navigate(["auth/login"]);
    }
}
