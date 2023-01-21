import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import {TableModule} from "primeng/table";
import {GroupsListComponent} from "../../groups-list/groups-list.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {AddGroupDialogComponent} from "../../add-group-dialog/add-group-dialog.component";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";

@NgModule({
    imports: [
        CommonModule,
        GroupsRoutingModule,
        TableModule,
        ButtonModule,
        RippleModule,
        DialogModule,
        FormsModule,
        PasswordModule
    ],
    declarations: [GroupsComponent,
        GroupsListComponent,
        AddGroupDialogComponent]
})
export class GroupsModule { }
