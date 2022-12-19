import { Component, OnInit } from '@angular/core';
import {Group} from "../../api/group";
import {GroupService} from "../../service/group.service";

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  selectedGroup: Group = {} as Group;
  groups: Group[] = [];
  isDeleteDialogVisible: boolean = false;
  constructor(private groupService: GroupService) {
  }
  ngOnInit(): void {
      this.getGroups();
  }
  getGroups(): void {
      this.groupService.getGroup(1).subscribe((group) => this.groups[0] = group);
  }
  redirectToGroup() {
  }
  confirmDeleteDialogStateChange(){
        this.isDeleteDialogVisible =  !this.isDeleteDialogVisible;
  }
}
