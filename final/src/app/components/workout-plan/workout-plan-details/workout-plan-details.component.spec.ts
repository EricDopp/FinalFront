import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlanDetailsComponent } from './workout-plan-details.component';

describe('WorkoutPlanDetailsComponent', () => {
  let component: WorkoutPlanDetailsComponent;
  let fixture: ComponentFixture<WorkoutPlanDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutPlanDetailsComponent]
    });
    fixture = TestBed.createComponent(WorkoutPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
