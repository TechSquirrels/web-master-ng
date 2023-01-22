import {Component, OnInit} from '@angular/core';
import {Group} from "../../api/group";
import {GroupService} from "../../service/group.service";
import {Router} from "@angular/router";
import {ProfileService} from "../../service/profile.service";
import {UserProfile} from "../../api/user-profile";


@Component({
    selector: 'app-groups-list',
    templateUrl: './groups-list.component.html',
    styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
    selectedGroup: Group = {} as Group;
    groups: Group[] = [];
    friends: any;
    user: UserProfile = {} as UserProfile;
    isDeleteDialogVisible: boolean = false;
    isAddDialogVisible: boolean = false;

    constructor(private groupService: GroupService,
                private profileService: ProfileService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getGroups();
        this.getUser();
        this.getFriends()
    }

    getGroups(): void {
        for(let index = 0; index < this.user.groups.length; index++)
        {
            this.groupService.getGroup(this.user.groups[index]).subscribe(group => {
                this.groups.push(group);
            })
        }
    }

    redirectToGroup(group: Group) {
        this.router.navigate([`/pages/group/${group.id}`])
    }

    openDeleteGroupDialog(group: Group) {
        this.isDeleteDialogVisible = !this.isDeleteDialogVisible;
        this.selectedGroup = group;
    }
    openAddGroupDialog() {
        this.selectedGroup = {} as Group;
        this.isAddDialogVisible = !this.isAddDialogVisible;
    }
    onDeleteCancel() {
        this.isDeleteDialogVisible = !this.isDeleteDialogVisible;
    }

    onDeleteConfirm() {
        this.groups = this.groups.filter(group => group.id !== this.selectedGroup.id)
        this.groupService.deleteGroup(this.selectedGroup).subscribe()
        this.isDeleteDialogVisible = !this.isDeleteDialogVisible;
    }

    onAddConfirm() {
        this.selectedGroup.userIds = [];
        this.selectedGroup.permissions = [];
        this.selectedGroup.no_part = 2;
        this.groupService.addGroup(this.selectedGroup).subscribe(result => {
            this.selectedGroup.id = result.id;
            this.selectedGroup.no_part = 1;
            this.groups.push(this.selectedGroup)
            this.isAddDialogVisible = !this.isAddDialogVisible;
        })
    }
    onAddCancel() {
        this.isAddDialogVisible = !this.isAddDialogVisible;
    }


    getUser() {
        this.profileService.getUser().subscribe(user => this.user = user)
    }
    getFriends() {
        this.profileService.getUserById(this.user.id).subscribe(users => this.friends = users)
    }
}
