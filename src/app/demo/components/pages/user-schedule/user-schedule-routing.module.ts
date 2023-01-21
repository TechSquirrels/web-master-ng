import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserScheduleComponent } from './user-schedule.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: UserScheduleComponent }
	])],
	exports: [RouterModule]
})
export class UserScheduleRoutingModule { }
