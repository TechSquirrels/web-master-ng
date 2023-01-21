import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'schedule', loadChildren: () => import('./user-schedule/user-schedule.module').then(m => m.UserScheduleModule) },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
        { path: 'group/:id', loadChildren: () => import('./group-schedule/group-schedule.module').then(m=>m.GroupScheduleModule)},
        { path: 'groups', loadChildren: () => import('./groups/groups.module').then(m=>m.GroupsModule)},
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
