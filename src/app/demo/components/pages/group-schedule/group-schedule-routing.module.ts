import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GroupScheduleComponent } from './group-schedule.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: GroupScheduleComponent }
	])],
	exports: [RouterModule]
})
export class GroupScheduleRoutingModule { }
