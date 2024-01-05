import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutPlan } from 'src/app/models/workout-plan';
import { WorkoutPlanService } from 'src/app/services/workout-plan.service';

@Component({
  selector: 'app-workout-plan-edit',
  templateUrl: './workout-plan-edit.component.html',
  styleUrls: ['./workout-plan-edit.component.css'],
})
export class WorkoutPlanEditComponent implements OnInit {
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
    private route: ActivatedRoute,
    private router: Router
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

  updateWorkoutPlan(): void {
    this.workoutPlanService
      .updateWorkoutPlan(this.workoutPlan.workoutPlanId, this.workoutPlan)
      .subscribe({
        next: (updatedWorkoutPlan) => {
          console.log('Workout Plan updated successfully', updatedWorkoutPlan);
          this.router.navigate(['/workout-plans']);
        },
        error: (error) => {
          console.error('Error updating workout plan', error);
        },
      });
  }
}
