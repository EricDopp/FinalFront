import { Component, OnInit } from '@angular/core';
import { WorkoutPlanService } from 'src/app/services/workout-plan.service';
import { WorkoutPlan } from 'src/app/models/workout-plan';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workout-plan-list',
  templateUrl: './workout-plan-list.component.html',
  styleUrls: ['./workout-plan-list.component.css'],
})
export class WorkoutPlanListComponent implements OnInit {
  workoutPlans: WorkoutPlan[] = [];

  constructor(
    private workoutPlanService: WorkoutPlanService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.workoutPlanService
      .getWorkoutPlansByUserId('user123') // FIXME: Get user_id from auth0
      .subscribe({
        next: (plans) => (this.workoutPlans = plans),
        error: (error) => console.error(error),
      });
  }

  getWeekdays(weekdayString: string): string {
    const weekdays = weekdayString.split(',').map(Number);

    const weekdaysMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const selectedWeekdays = weekdays.map((day) => weekdaysMap[day]);

    return selectedWeekdays.join(', ');
  }
}
