import { Component, OnInit } from '@angular/core';
import { WorkoutPlanService } from 'src/app/services/workout-plan.service';
import { WorkoutPlan } from 'src/app/models/workout-plan';

@Component({
  selector: 'app-workout-plan-list',
  templateUrl: './workout-plan-list.component.html',
  styleUrls: ['./workout-plan-list.component.css'],
})
export class WorkoutPlanListComponent implements OnInit {
  workoutPlans: WorkoutPlan[] = [];

  constructor(private workoutPlanService: WorkoutPlanService) {}

  ngOnInit() {
    this.workoutPlanService
      .getWorkoutPlansByUserId('user123') // FIXME: Get user_id from auth0
      .subscribe({
        next: (plans) => (this.workoutPlans = plans),
        error: (error) => console.error(error),
      });
  }
}
