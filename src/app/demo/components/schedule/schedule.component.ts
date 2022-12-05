import { Component } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from '../../api/event-utils';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html'
})
export class ScheduleComponent {
    calendarOptions: CalendarOptions = {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        select: this.handleDateSelect.bind(this),
        eventClick: this.handelActivityClick.bind(this),
        eventsSet: this.handleActivities.bind(this)
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
    };
    //calendarVisible = true;
    currentActivities: EventApi[] = [];

    // handleCalendarToggle() {
    //     this.calendarVisible = !this.calendarVisible;
    // }

    handleWeekendsToggle() {
        const { calendarOptions } = this;
        calendarOptions.weekends = !calendarOptions.weekends;
    }

    handleDateSelect(selectInfo: DateSelectArg) {
        const title = prompt('Nume activitate: ');
        const priority = prompt('Priority(0 - optional, 1 - mandatory): ')
        const calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                priority,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            });
        }
    }

    handelActivityClick(clickInfo: EventClickArg) {
        if (confirm(`Are you sure you want to delete the activity '${clickInfo.event.title}'`)) {
            clickInfo.event.remove();
        }
    }

    handleActivities(activities: EventApi[]) {
        this.currentActivities = activities;
    }
}
