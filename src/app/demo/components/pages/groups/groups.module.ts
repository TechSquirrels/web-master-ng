import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import {OrderListModule} from "primeng/orderlist";
import {PickListModule} from "primeng/picklist";
import {GroupsListComponent} from "../../groups-list/groups-list.component";

@NgModule({
    imports: [
        CommonModule,
        GroupsRoutingModule,
        TableModule,
        ButtonModule,
        RippleModule,
        DialogModule,
        FormsModule,
        PasswordModule,
        InputTextModule,
        OrderListModule,
        PickListModule,
    ],
    exports: [
        GroupsListComponent
    ],
    declarations: [GroupsComponent,        GroupsListComponent]
})
export class GroupsModule { }
