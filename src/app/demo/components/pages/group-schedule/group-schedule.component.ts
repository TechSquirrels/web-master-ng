import {Component, Input, OnInit} from '@angular/core';
import { Group } from 'src/app/demo/api/group';
import { MessageService } from 'primeng/api';
import {GroupService} from "../../../service/group.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './group-schedule.component.html',
    providers: [MessageService]
})
export class GroupScheduleComponent implements OnInit {
    @Input() group: Group = {} as Group;
    submitted: boolean = false;
    statuses: any[] = [];
    rowsPerPageOptions = [5, 10, 20];

    constructor(private groupService: GroupService,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.getGroupById()
    }

    getGroupById() {
        this.route.params.subscribe(params => {
            this.groupService.getGroup(+params['id']).subscribe(group => {
                this.group = group;
            })
        })
    }





}
