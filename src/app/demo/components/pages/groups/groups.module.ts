import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import {TableModule} from "primeng/table";
import {GroupsListComponent} from "../../groups-list/groups-list.component";

@NgModule({
    imports: [
        CommonModule,
        GroupsRoutingModule,
        TableModule],
    declarations: [GroupsComponent,
        GroupsListComponent]
})
export class GroupsModule { }
