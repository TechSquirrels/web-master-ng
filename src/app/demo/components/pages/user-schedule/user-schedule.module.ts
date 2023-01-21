import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserScheduleRoutingModule } from './user-schedule-routing.module';
import { UserScheduleComponent } from './user-schedule.component';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { ScheduleModule} from "../../schedule/schedule.module";
import {AddActivityDialogComponent} from "../../add-activity-dialog/add-activity-dialog.component";
import {PasswordModule} from "primeng/password";

@NgModule({
    imports: [
        CommonModule,
        UserScheduleRoutingModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        ScheduleModule,
        PasswordModule
    ],
    declarations: [UserScheduleComponent, AddActivityDialogComponent]
})
export class UserScheduleModule { }
