import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutSetsCreateComponent } from './workout-sets-create.component';

describe('WorkoutSetsCreateComponent', () => {
  let component: WorkoutSetsCreateComponent;
  let fixture: ComponentFixture<WorkoutSetsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutSetsCreateComponent]
    });
    fixture = TestBed.createComponent(WorkoutSetsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
