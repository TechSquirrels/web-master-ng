import { FlexLayoutModule } from "@angular/flex-layout";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { GroupService } from "./demo/service/group.service";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {ScheduleModule} from "./demo/components/schedule/schedule.module";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {AddActivityDialogComponent} from "./demo/components/add-activity-dialog/add-activity-dialog.component";
import {GroupsListComponent} from "./demo/components/groups-list/groups-list.component";

@NgModule({
    declarations: [
        NotfoundComponent, AppComponent,
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        FlexLayoutModule,
        HttpClientModule,
        ScheduleModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        TableModule,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        ProductService, GroupService,
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
