import { NgModule } from '@angular/core';
import { ScheduleComponent} from "./schedule.component";
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import {DialogModule} from "primeng/dialog";
FullCalendarModule.registerPlugins([dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin])

@NgModule({
    imports: [
        FullCalendarModule,
        DialogModule
    ],
    declarations: [ScheduleComponent],
    exports: [ScheduleComponent]
})
export class ScheduleModule { }
