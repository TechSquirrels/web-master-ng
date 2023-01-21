import { Component, OnInit } from '@angular/core';
import {Group} from "../../api/group";
import {GroupService} from "../../service/group.service";
import {group} from "@angular/animations";
import {Router} from "@angular/router";

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  selectedGroup: Group = {} as Group;
  groups: Group[] = [];
  isDeleteDialogVisible: boolean = false;
  constructor(private groupService: GroupService,
              private router: Router) {
  }

  ngOnInit(): void {
      this.getGroups();
  }
  getGroups(): void {
      this.groupService.getGroup(7).subscribe((group) => {
          this.groups.push(group);
      });
      this.groupService.getGroup(8).subscribe((group) => {
          this.groups.push(group);
      });
      this.groupService.getGroup(9).subscribe((group) => {
          this.groups.push(group);
      });

  }

  redirectToGroup(group: Group) {
      this.router.navigate([`/pages/group/${group.id}`])
  }

  openDeleteGroupDialog(group: Group){
      this.isDeleteDialogVisible = !this.isDeleteDialogVisible;
      this.selectedGroup = group;
  }
  onCancel() {
      this.isDeleteDialogVisible = !this.isDeleteDialogVisible;
  }

  onDeleteConfirm() {
      this.groups.filter(group => group.id !== this.selectedGroup.id)
      this.groupService.deleteGroup(this.selectedGroup).subscribe()
      this.isDeleteDialogVisible = !this.isDeleteDialogVisible;
  }


}
