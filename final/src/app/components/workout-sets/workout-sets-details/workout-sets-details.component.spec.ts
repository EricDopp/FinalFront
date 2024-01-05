import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutSetsDetailsComponent } from './workout-sets-details.component';

describe('WorkoutSetsDetailsComponent', () => {
  let component: WorkoutSetsDetailsComponent;
  let fixture: ComponentFixture<WorkoutSetsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutSetsDetailsComponent]
    });
    fixture = TestBed.createComponent(WorkoutSetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
