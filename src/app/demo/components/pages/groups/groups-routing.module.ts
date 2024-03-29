import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GroupsComponent } from './groups.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: GroupsComponent }
    ])],
    exports: [RouterModule]
})
export class GroupsRoutingModule { }
