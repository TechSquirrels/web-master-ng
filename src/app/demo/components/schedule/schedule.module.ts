import { NgModule } from '@angular/core';
import { ScheduleComponent} from "./schedule.component";
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {CommonModule} from "@angular/common";

FullCalendarModule.registerPlugins([dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin])

@NgModule({
    imports: [
        FullCalendarModule,
        DialogModule,
        FormsModule,
        PasswordModule,
        ButtonModule,
        RippleModule,
        InputTextModule,
        CommonModule
    ],
    declarations: [ScheduleComponent],
    exports: [ScheduleComponent]
})
export class ScheduleModule { }
