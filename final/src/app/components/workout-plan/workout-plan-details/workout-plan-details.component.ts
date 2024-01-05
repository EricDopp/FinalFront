import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutPlan } from 'src/app/models/workout-plan';
import { WorkoutPlanService } from 'src/app/services/workout-plan.service';

@Component({
  selector: 'app-workout-plan-details',
  templateUrl: './workout-plan-details.component.html',
  styleUrls: ['./workout-plan-details.component.css'],
})
export class WorkoutPlanDetailsComponent implements OnInit {
  workoutPlan: WorkoutPlan = {
    workoutPlanId: 0,
    userId: '',
    workoutPlanName: '',
    weekDay: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  constructor(
    private workoutPlanService: WorkoutPlanService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const workoutPlanId = this.route.snapshot.params['id'];
    this.getWorkoutPlan(workoutPlanId);
  }

  getWorkoutPlan(workoutPlanId: number): void {
    this.workoutPlanService.getWorkoutPlanById(workoutPlanId).subscribe({
      next: (workoutPlan) => {
        this.workoutPlan = workoutPlan;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
