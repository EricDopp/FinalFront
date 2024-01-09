import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlanEditComponent } from './workout-plan-edit.component';

describe('WorkoutPlanEditComponent', () => {
  let component: WorkoutPlanEditComponent;
  let fixture: ComponentFixture<WorkoutPlanEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutPlanEditComponent]
    });
    fixture = TestBed.createComponent(WorkoutPlanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
