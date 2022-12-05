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

@NgModule({
    declarations: [
        NotfoundComponent, AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        FlexLayoutModule,
        HttpClientModule,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, ActivityService, GroupService,
    ],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
