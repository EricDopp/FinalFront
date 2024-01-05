import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutSetsListComponent } from './workout-sets-list.component';

describe('WorkoutSetsListComponent', () => {
  let component: WorkoutSetsListComponent;
  let fixture: ComponentFixture<WorkoutSetsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutSetsListComponent]
    });
    fixture = TestBed.createComponent(WorkoutSetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
