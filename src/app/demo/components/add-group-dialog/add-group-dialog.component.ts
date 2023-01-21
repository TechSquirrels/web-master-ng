import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserProfile} from "../../api/user-profile";
import {ProfileService} from "../../service/profile.service";

@Component({
  selector: 'app-group-dialog',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupDialogComponent implements OnInit {

    @Input() isVisible: boolean = false;
    @Input() user: UserProfile = {} as UserProfile;
    @Output() $closeDialog = new EventEmitter<boolean>();

    constructor(private profileService: ProfileService) { }

    ngOnInit(): void {
    }

    onSave() {
        this.isVisible = false;
        this.$closeDialog.emit(true);
    }
}
