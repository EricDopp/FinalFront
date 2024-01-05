import { Component, Input, OnInit } from '@angular/core';
import { WorkoutSetsService } from 'src/app/services/workout-sets.service';
import { WorkoutSets } from 'src/app/models/workout-sets';

@Component({
  selector: 'app-workout-sets-list',
  templateUrl: './workout-sets-list.component.html',
  styleUrls: ['./workout-sets-list.component.css'],
})
export class WorkoutSetsListComponent implements OnInit {
  @Input() workoutPlanId!: number; // FIXME: Add data binding where you embed the component. i.e. : <app-workout-sets-list [workoutPlanId]="currentWorkoutPlan.workoutPlanId"></app-workout-sets-list> or other solution
  workoutSets: WorkoutSets[] = [];

  constructor(private workoutSetsService: WorkoutSetsService) {}

  ngOnInit(): void {
    this.fetchWorkoutSets();
  }

  fetchWorkoutSets(): void {
    this.workoutSetsService
      .getWorkoutSetsByPlanId(this.workoutPlanId)
      .subscribe({
        next: (data: WorkoutSets[]) => {
          this.workoutSets = data;
        },
        error: (error: any) => {
          console.error('Error fetching workout sets:', error);
        },
      });
  }
}
