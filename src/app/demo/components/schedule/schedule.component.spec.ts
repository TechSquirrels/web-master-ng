import { TestBed } from '@angular/core/testing';
import { ScheduleComponent } from './schedule.component';

describe('ScheduleComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ScheduleComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(ScheduleComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(ScheduleComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content span')?.textContent).toContain('angular14 app is running!');
    });
});
