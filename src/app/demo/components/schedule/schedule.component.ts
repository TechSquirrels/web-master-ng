import {Component, Input} from '@angular/core';
import {
    CalendarOptions,
    DateSelectArg,
    EventClickArg,
    EventInput
} from '@fullcalendar/angular';
import {ApiService} from "../../service/api.service";
import {Activity} from "../../api/activity";

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html'
})
export class ScheduleComponent {
    @Input() activities: any[] = []

    calendarOptions: CalendarOptions = {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        initialView: 'dayGridMonth',
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        select: this.handleDateSelect.bind(this),
        eventClick: this.handelActivityClick.bind(this),
        // eventAdd: this.
        // eventChange:
        // eventRemove:
    };

    //calendarVisible = true;
    constructor(private apiService: ApiService) {
    }

    handleWeekendsToggle() {
        const {calendarOptions} = this;
        calendarOptions.weekends = !calendarOptions.weekends;
    }

    handleDateSelect(selectInfo: DateSelectArg) {
        const activityName = prompt('Nume activitate: ');
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // clear date selection
        let apiActivity: Activity = Object();
        if (activityName) {
            apiActivity.name = activityName;
            apiActivity.startField = "11:30:00";
            apiActivity.endField = "12:00:00";
            apiActivity.date = selectInfo.startStr + 'T14:35:41Z'
            apiActivity.state = 0;
        } else {
            console.log("TODO ERROR")
        }
        this.apiService.createActivity(apiActivity).subscribe();
        const nowDate = new Date();
        const yearMonth = nowDate.getUTCFullYear() + '-' + (nowDate.getUTCMonth() + 1);
        this.calendarOptions!.events = [{
            title: 'Test',
            start: yearMonth + '-22T07:00:00.000Z',
            end: yearMonth + '-22T08:00:00.000Z'
        }];
        this.apiService.getActivities().subscribe()
    }

    handelActivityClick(clickInfo: EventClickArg) {
        if (confirm(`Are you sure you want to delete the activity '${clickInfo.event.title}'`)) {
            clickInfo.event.remove();
        }
        this.apiService.deleteActivity(clickInfo.event.id)
    }

}
