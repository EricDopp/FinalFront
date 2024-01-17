import { Component, OnInit, TemplateRef } from '@angular/core';
import { WorkoutPlanService } from 'src/app/services/workout-plan.service';
import { WorkoutPlan } from 'src/app/models/workout-plan';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-workout-plan-list',
  templateUrl: './workout-plan-list.component.html',
  styleUrls: ['./workout-plan-list.component.css'],
})
export class WorkoutPlanListComponent implements OnInit {
  workoutPlans$: Observable<WorkoutPlan[]> = new Observable<WorkoutPlan[]>(); // Use Observable to track changes
  selectedWorkoutPlan: WorkoutPlan | undefined;
  noWorkoutPlans: TemplateRef<NgIfContext<WorkoutPlan[]>> | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private workoutPlanService: WorkoutPlanService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadWorkoutPlans();
    // Subscribe to changes in workout plans
    this.workoutPlanService.getWorkoutPlansUpdated$().pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.loadWorkoutPlans();
    });
  }

  loadWorkoutPlans(): void {
    this.workoutPlans$ = this.workoutPlanService.getWorkoutPlansByUserId('user123'); // FIXME: Get user_id from auth0
  }

  navigateToWorkoutSets(workoutPlanId: number): void {
    this.router.navigate(['/sets'], { queryParams: { workoutPlanId: workoutPlanId } });
  }

  showDetails(workoutPlan: WorkoutPlan): void {
    this.selectedWorkoutPlan = this.selectedWorkoutPlan === workoutPlan ? undefined : workoutPlan;
  }

  getWeekdays(weekdayString: string): string {
    const weekdays = weekdayString.split(',').map(Number);

    const weekdaysMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const selectedWeekdays = weekdays.map((day) => weekdaysMap[day]);

    return selectedWeekdays.join(', ');
  }

  deleteWorkoutPlan(workoutPlanId: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this workout plan?');
    if (confirmDelete) {
      this.workoutPlanService.deleteWorkoutPlan(workoutPlanId).subscribe(() => {
        // On successful deletion, reload the plans
        this.loadWorkoutPlans();
        console.log('Workout plan deleted successfully.');
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  editWorkoutPlan(workoutPlanId: number): void {
    this.router.navigate(['plans/edit', workoutPlanId]); // Assuming the route for editing is '/edit-plan/:id'
  }
  
}
