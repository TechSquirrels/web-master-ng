import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Group } from '../../api/group';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {ScheduleService} from "../../service/schedule.service";
import {GroupService} from "../../service/group.service";

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    groups!: Group[];

    subscription!: Subscription;
    confirmDeleteDialog: boolean = false;
    selectedGroup!: Group;

    constructor(private productService: ProductService, public layoutService: LayoutService,
                private userService: UserService,
                private groupService: GroupService,
                private scheduleService: ScheduleService,
                private router: Router) {
    }

    ngOnInit() {
        this.productService.getGroupList().then(data => this.groups = data);
        this.groupService.addGroup({userIds: [1, 2], numberOfParticipants: 2, id: 1}).subscribe(res => console.log(res))
        this.userService.getUser(12).subscribe(user => {
            let scheduleId = user.scheduleId;
            this.scheduleService.getSchedule(scheduleId).subscribe(schedule => {
            })
        })
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
}
