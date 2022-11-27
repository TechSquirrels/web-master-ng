import { Component, OnInit } from '@angular/core';
import { GroupService } from "../../../service/group.service";

@Component({
    templateUrl: './floatlabeldemo.component.html',
    styleUrls: ['./floatlabeldemo.component.scss']
})
export class FloatLabelDemoComponent implements OnInit {

    activityName?: string;

    duration?: number;

    groups: any[] = [];

    value1: any;

    value2: any;

    value10: any;


    constructor(private groupService: GroupService) {
    }

    ngOnInit() {
        this.groupService.getGroups().then(groups => {
            this.groups = groups;
        });
    }
}
