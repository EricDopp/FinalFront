import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutPlan } from 'src/app/models/workout-plan';
import { WorkoutPlanService } from 'src/app/services/workout-plan.service';

@Component({
  selector: 'app-workout-plan-create',
  templateUrl: './workout-plan-create.component.html',
  styleUrls: ['./workout-plan-create.component.css'],
})
export class WorkoutPlanCreateComponent {
  workoutPlan: WorkoutPlan = {
    workoutPlanId: 0,
    userId: 'user123',
    workoutPlanName: '',
    weekDay: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  constructor(
    private workoutPlanService: WorkoutPlanService,
    private router: Router
  ) {}

  createWorkoutPlan(): void {
    // Convert selectedDays array to a comma-separated string
    this.workoutPlan.weekDay = this.selectedDays.join(',');

    this.workoutPlanService.createWorkoutPlan(this.workoutPlan).subscribe({
      next: (createdWorkoutPlan) => {
        console.log('Workout Plan created successfully', createdWorkoutPlan);
        this.router.navigate(['/workout-plans']);
      },
      error: (error) => {
        console.error('Error creating workout plan', error);
      },
    });
  }

  selectedDays: number[] = [];

  isDaySelected(day: number): boolean {
    return this.selectedDays.includes(day);
  }

  toggleDay(day: number): void {
    if (this.isDaySelected(day)) {
      this.selectedDays = this.selectedDays.filter((d) => d !== day);
    } else {
      this.selectedDays.push(day);
    }
  }
}
