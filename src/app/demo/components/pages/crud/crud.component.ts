import {Component, Input, OnInit} from '@angular/core';
import { Group } from 'src/app/demo/api/group';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import {ApiService} from "../../../service/api.service";
import {EventInput} from "@fullcalendar/angular";
import {Activity} from "../../../api/activity";

@Component({
    templateUrl: './crud.component.html',
    providers: [MessageService]
})
export class CrudComponent implements OnInit {
    activities: EventInput[] = [];

    drawingDialog: boolean = false;

    deleteDrawingDialog: boolean = false;

    deleteDrawingsDialog: boolean = false;

    activity: Activity = {} as Activity;

    selectedActivity: Activity[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];
    @Input() activity_test!: Activity;
    constructor(private messageService: MessageService, private api: ApiService) {
        this.api.getActivities().subscribe((activities) => console.log(activities))
    }

    ngOnInit() {
        this.cols = [
            { field: 'modulo', header: 'Product' },
            { field: 'size', header: 'Price' },
            { field: 'image', header: 'Category' },
        ];
    }




    openNew() {
        this.activity = {} as Activity;
        this.submitted = false;
        this.drawingDialog = true;
    }

    deleteSelectedDraws() {
        this.deleteDrawingsDialog = true;
    }

    editDraw(drawing: Activity) {
        this.activity = { ...drawing };
        this.drawingDialog = true;
    }

    deleteDraw(drawing: Activity) {
        this.deleteDrawingDialog = true;
        this.activity = { ...drawing };
    }



    confirmDelete() {
        this.deleteDrawingDialog = false;
        // this.activities = this.activities.filter(val => val.id !== this.group.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Drawing deleted', life: 3000 });
        this.activity = {} as Activity;
    }

    hideDialog() {
        this.drawingDialog = false;
        this.submitted = false;
    }

    saveDraw() {
        this.submitted = true;

        if (this.activity.name?.trim()) {
            if (this.activity.id) {
                // @ts-ignore
                this.activities[this.findIndexById(this.activity.id)] = this.activity;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                this.activity.id = 1;
                // @ts-ignore
                this.activities.push(this.activity);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            this.activities = [...this.activities];
            this.drawingDialog = false;
            // this.api.createActivity(this.activity).subscribe(
            //     data => {
            //         console.log(data);
            //         this.submitted = true;
            //     },
            //     error => console.log(error));
        }

    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.activities.length; i++) {
            // @ts-ignore
            if (this.activities[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = '0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }``
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
