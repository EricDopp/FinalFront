import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlanCreateComponent } from './workout-plan-create.component';

describe('WorkoutPlanCreateComponent', () => {
  let component: WorkoutPlanCreateComponent;
  let fixture: ComponentFixture<WorkoutPlanCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutPlanCreateComponent]
    });
    fixture = TestBed.createComponent(WorkoutPlanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
