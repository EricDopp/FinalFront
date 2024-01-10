// workout-sets-create.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutSetsService } from 'src/app/services/workout-sets.service';
import { WorkoutSets } from 'src/app/models/workout-sets';

@Component({
  selector: 'app-workout-sets-create',
  templateUrl: './workout-sets-create.component.html',
  styleUrls: ['./workout-sets-create.component.css'],
})
export class WorkoutSetsCreateComponent {
  workoutSets: WorkoutSets = {
    workoutSetId: 0,
    workoutPlanId: 6,
    userId: 'user123',
    exerciseDBId: 'exercise123',
    repCount: 0,
    weight: 0,
    weightUnit: '',
    workoutSetCount: 0,
    sortOrder: 0,
  };

  constructor(
    private workoutSetsService: WorkoutSetsService,
    private router: Router
  ) {}

  createWorkoutSet(): void {
    this.workoutSetsService.createWorkoutSets(this.workoutSets).subscribe({
      next: (createdWorkoutSet: WorkoutSets) => {
        console.log('Workout set created successfully:', createdWorkoutSet);
        this.router.navigate(['/workout-sets', createdWorkoutSet.workoutSetId]);
      },
      error: (error: any) => {
        console.error('Error creating workout set:', error);
      },
    });
  }
}
