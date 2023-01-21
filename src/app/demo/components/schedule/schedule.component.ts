import {Component, Input} from '@angular/core';
import {
    CalendarOptions,
    DateSelectArg,
    EventClickArg,
    EventInput
} from '@fullcalendar/angular';
import {ApiService} from "../../service/api.service";
import {Activity} from "../../api/activity";
import {map} from "rxjs";

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
    @Input() activities: any[] = [];
    @Input() isEditable: boolean = true;
    events: any;
    selectedInfo!: DateSelectArg;
    //calendarVisible = true;
    isVisible: boolean = false;
    activityName: string = "";
    calendarOptions: CalendarOptions = {
        events: {} as EventInput,
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        height: 800,
        initialView: 'timeGridDay',
        nowIndicatorClassNames: 'red-now',
        slotDuration: "00:15",
        slotMinTime: "06:00",
        weekends: true,
        editable: this.isEditable,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        select: this.handleDateSelect.bind(this),
        eventClick: this.handelActivityClick.bind(this)
        // eventAdd: this.
        // eventChange:
        // eventRemove:
    };
    placeholder: string = "Swimming class";

    constructor(private activityService: ApiService) {
    }

    ngOnInit() {
        this.events = [];
        let act = this.activityService.getActivities().pipe(map(activity => {
            let event: EventInput = <EventInput>{
                start: activity.startField,
                end: activity.endField,
                title: activity.name
            }
            this.events.push(event);
        }))
        console.log(act)
    }

    handleWeekendsToggle() {
        const {calendarOptions} = this;
        calendarOptions.weekends = !calendarOptions.weekends;
    }

    handleDateSelect(selectInfo: DateSelectArg) {
        this.selectedInfo = selectInfo;
        this.openDialog()
    }

    handelActivityClick(clickInfo: EventClickArg) {
        if (confirm(`Are you sure you want to delete the activity '${clickInfo.event.title}'`)) {
            clickInfo.event.remove();
            if (clickInfo.event.id && clickInfo.event.id !== "")
                this.activityService.deleteActivity(clickInfo.event.id).subscribe()
        }

    }

    onSave() {
        if (!this.activityName || this.activityName === "")
            this.placeholder = "Activity name should not be empty!";
        else {
            let apiActivity: Activity = {} as Activity;
            apiActivity.name = this.activityName;
            apiActivity.startField = this.extractHour(this.selectedInfo.startStr);
            apiActivity.endField = this.extractHour(this.selectedInfo.endStr);
            apiActivity.date = this.selectedInfo.startStr;
            this.activityService.createActivity(apiActivity).subscribe();
            this.calendarOptions.events = [{
                title: apiActivity.name,
                start: this.selectedInfo.start.toISOString(),
                end: this.selectedInfo.end.toISOString()
            }];
            this.selectedInfo.view.calendar.unselect()
            this.isVisible = false;
            this.activityName = "";
        }
    }

    onCancel() {
        this.isVisible = false;
    }

    openDialog() {
        this.isVisible = !this.isVisible;
    }

    extractHour(timeString: string): string {
        // Extract the hour from the string
        let hour = timeString.slice(11, 19);
        return hour;
    }

    extractDate(timeString: string): string {
        //Extract the hour from the string
        let hour = timeString.slice(0, 9)
        return hour;
    }
}
