import { FlexLayoutModule } from "@angular/flex-layout";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { ActivityService} from "./demo/service/activity.service";
import { GroupService } from "./demo/service/group.service";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {ScheduleModule} from "./demo/components/schedule/schedule.module";
import { ProfileDialogComponent } from './demo/components/profile-dialog/profile-dialog.component';
import {DialogModule} from "primeng/dialog";
import { DialogFooterComponent } from './demo/components/dialog-footer/dialog-footer.component';
import { DialogHeaderComponent } from './demo/components/dialog-header/dialog-header.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";

@NgModule({
    declarations: [
        NotfoundComponent, AppComponent, ProfileDialogComponent, DialogFooterComponent, DialogHeaderComponent
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
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, ActivityService, GroupService,
    ],
    exports: [
        ProfileDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
