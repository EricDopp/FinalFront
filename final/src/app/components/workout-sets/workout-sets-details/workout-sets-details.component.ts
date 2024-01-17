import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutSetsService } from 'src/app/services/workout-sets.service';
import { WorkoutSets } from 'src/app/models/workout-sets';

@Component({
  selector: 'app-workout-sets-details',
  templateUrl: './workout-sets-details.component.html',
  styleUrls: ['./workout-sets-details.component.css'],
})
export class WorkoutSetsDetailsComponent implements OnInit {
  workoutSetId: number = 0;
  workoutSet: WorkoutSets = {
    workoutSetId: 0,
    workoutPlanId: 0,
    userId: '',
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
    this.workoutSetsService.getWorkoutSetsById(this.workoutSetId).subscribe({
      next: (data: WorkoutSets) => {
        this.workoutSet = data;
      },
      error: (error: any) => {
        console.error('Error fetching workout set details:', error);
      },
    });
  }
}
