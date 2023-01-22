import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  @Input() participants: any;

  constructor() { }

  ngOnInit(): void {
  }

}
