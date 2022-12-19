import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {

    @Input() isVisible: boolean = false;
    firstName: string = "Johnny"
    lastName: string = "Bravo"
    password: string = "ParolaTest213$a"
    description: string = "--- profilul lui Johnny Bravo ---"
  constructor() { }

  ngOnInit(): void {
  }


}
