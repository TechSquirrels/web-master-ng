import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserProfile} from "../../api/user-profile";
import {ProfileService} from "../../service/profile.service";

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {

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
