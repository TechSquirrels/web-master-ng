import { Component } from '@angular/core';
import {
    CalendarOptions,
    DateSelectArg,
    EventClickArg,
    EventApi,
    EventSourceInput,
    EventInput
} from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from '../../api/event-utils';
import {ApiService} from "../../service/api.service";
import {Activity} from "../../api/activity";

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html'
})
export class ScheduleComponent {
    activities: EventInput[] = []
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
        this.apiService.getActivities().subscribe(activities => {
            let activity:EventInput = Object();
            for (let i = 0; i < activities.length; i++){
                activity.title = activities[i].name;
                activity.start = '2022-12-12'

                activity.allDay = true;
                console.log(activity)
                this.activities[i] = activity
                console.log(this.activities)
            }
            console.log(this.activities)
        })

    }

    handleWeekendsToggle() {
        const { calendarOptions } = this;
        calendarOptions.weekends = !calendarOptions.weekends;
    }

    handleDateSelect(selectInfo: DateSelectArg) {
        const activityName = prompt('Nume activitate: ');
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // clear date selection
        let apiActivity: Activity = Object();
        if (activityName) {
            apiActivity.id = 111;
            apiActivity.name = activityName;
            apiActivity.startField = selectInfo.startStr;
            apiActivity.endField = selectInfo.endStr;
            apiActivity.dayOfWeek=11;
            apiActivity.state=0;
        }
        else{
            console.log("TODO ERROR")
        }
        this.apiService.createActivity(apiActivity).subscribe();
        this.apiService.getActivities().subscribe()
    }

    handelActivityClick(clickInfo: EventClickArg) {
        if (confirm(`Are you sure you want to delete the activity '${clickInfo.event.title}'`)) {
            clickInfo.event.remove();
        }
        this.apiService.deleteActivity(clickInfo.event.id)
    }

}
