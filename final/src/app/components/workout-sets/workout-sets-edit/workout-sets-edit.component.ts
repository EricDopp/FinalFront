// workout-sets-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutSetsService } from 'src/app/services/workout-sets.service';
import { WorkoutSets } from 'src/app/models/workout-sets';

@Component({
  selector: 'app-workout-sets-edit',
  templateUrl: './workout-sets-edit.component.html',
  styleUrls: ['./workout-sets-edit.component.css'],
})
export class WorkoutSetsEditComponent implements OnInit {
  workoutSetId: number = 0;
  workoutSets: WorkoutSets = {
    workoutSetId: 0,
    workoutPlanId: 0,
    userId: 'user123',
    exerciseDBId: '',
    exerciseName: '',
    repCount: 0,
    weight: 0,
    weightUnit: '',
    workoutSetCount: 0,
    sortOrder: 0,
  };

  constructor(
    private workoutSetsService: WorkoutSetsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.workoutSetId = 12;

    this.workoutSetsService.getWorkoutSetsById(this.workoutSetId).subscribe({
      next: (data: WorkoutSets) => {
        this.workoutSets = data;
      },
      error: (error: any) => {
        console.error('Error fetching workout set details:', error);
      },
    });
  }

  updateWorkoutSets(): void {
    this.workoutSetsService
      .updateWorkoutSets(this.workoutSetId, this.workoutSets)
      .subscribe({
        next: (updatedWorkoutSet: WorkoutSets) => {
          console.log('Workout set updated successfully:', updatedWorkoutSet);
        },
        error: (error: any) => {
          console.error('Error updating workout set:', error);
        },
      });
  }
}
