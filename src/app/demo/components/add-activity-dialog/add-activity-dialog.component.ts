import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserProfile} from "../../api/user-profile";
import {ProfileService} from "../../service/profile.service";

@Component({
  selector: 'app-activity-dialog',
  templateUrl: './add-activity-dialog.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityDialogComponent implements OnInit {

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
