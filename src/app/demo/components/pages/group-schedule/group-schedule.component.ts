import {Component, Input, OnInit} from '@angular/core';
import { Activity } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import {ActivityService} from "../../../service/activity.service";
import {ApiService} from "../../../service/api.service";

@Component({
    templateUrl: './group-schedule.component.html',
    providers: [MessageService]
})
export class GroupScheduleComponent implements OnInit {
    activities: Activity[] = [];
    activity: Activity = {};
    selectedActivity: Activity[] = [];
    submitted: boolean = false;
    statuses: any[] = [];
    rowsPerPageOptions = [5, 10, 20];

    constructor(private activityService: ActivityService, private messageService: MessageService, private api: ApiService) {}


    ngOnInit() {
        this.activityService.getActivities().then(data => this.activities = data);
    }



}
