import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutPlan } from 'src/app/models/workout-plan';
import { WorkoutPlanService } from 'src/app/services/workout-plan.service';

@Component({
  selector: 'app-workout-plan-details',
  templateUrl: './workout-plan-details.component.html',
  styleUrls: ['./workout-plan-details.component.css'],
})
export class WorkoutPlanDetailsComponent implements OnInit {
  workoutPlan: WorkoutPlan = {
    workoutPlanId: 7,
    userId: 'user123',
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
    const workoutPlanId = 7;
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

  // Helper function to map comma-delimited string to weekday names
  getWeekdays(): string[] {
    const selectedDays = this.workoutPlan.weekDay.split(',').map(Number);
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return selectedDays.map((day) => weekdays[day]);
  }
}
