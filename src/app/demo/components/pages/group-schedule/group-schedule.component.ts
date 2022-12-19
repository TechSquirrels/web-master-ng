import {Component, Input, OnInit} from '@angular/core';
import { Group } from 'src/app/demo/api/group';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import {ActivityService} from "../../../service/activity.service";
import {ApiService} from "../../../service/api.service";

@Component({
    templateUrl: './group-schedule.component.html',
    providers: [MessageService]
})
export class GroupScheduleComponent implements OnInit {
    groups: Group[] = [];
    group: Group = {} as Group;
    selectedGroup: Group[] = [];
    submitted: boolean = false;
    statuses: any[] = [];
    rowsPerPageOptions = [5, 10, 20];

    constructor() {}


    ngOnInit() {
        ///TODO Group service
    }



}
