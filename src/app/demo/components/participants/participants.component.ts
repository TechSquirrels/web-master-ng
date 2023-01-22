import {Component, Input, OnInit} from '@angular/core';
import {UserProfile} from "../../api/user-profile";
import {ProfileService} from "../../service/profile.service";

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  @Input() participantsIds: any;
  users: UserProfile[] = [];
  participants: any;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
      this.getParticipants();
  }

    getParticipants() {
      for (let index = 0; index < this.participantsIds.length; index++) {
          this.profileService.getUserById(this.participantsIds[index]).subscribe(user =>
          this.participants.push(user))
      }
      console.log(this.participants)
    }
}
