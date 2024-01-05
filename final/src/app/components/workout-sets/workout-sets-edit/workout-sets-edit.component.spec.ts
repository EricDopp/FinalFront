import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutSetsEditComponent } from './workout-sets-edit.component';

describe('WorkoutSetsEditComponent', () => {
  let component: WorkoutSetsEditComponent;
  let fixture: ComponentFixture<WorkoutSetsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutSetsEditComponent]
    });
    fixture = TestBed.createComponent(WorkoutSetsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
