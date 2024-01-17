import { Component, Input, OnInit } from '@angular/core';
import { WorkoutSetsService } from 'src/app/services/workout-sets.service';
import { WorkoutSets } from 'src/app/models/workout-sets';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workout-sets-list',
  templateUrl: './workout-sets-list.component.html',
  styleUrls: ['./workout-sets-list.component.css'],
})
export class WorkoutSetsListComponent implements OnInit {
  @Input() workoutPlanId!: number; // FIXME: Add data binding where you embed the component. i.e. : <app-workout-sets-list [workoutPlanId]="currentWorkoutPlan.workoutPlanId"></app-workout-sets-list> or other solution
  // Okay so I did the embed with the component for workoutPlanDetails and it works perfectly.  However I did the same for workoutSetsList inside of those same details and it looked bad-
  // -so I had to do some crazy queryParam magic to get it to navigate to another page entirely and it works.  I don't know if it's the most elegant solution though but it works.
  // For our intents and purposes this FIXME should be resolved in this component and elsewhere, but in case you weren't happy with it I thought I'd keep the comment and add my own.
  // Please delete all of these comments if you are satisfied with the outcome.
  workoutSets: WorkoutSets[] = [];

  constructor(
    private workoutSetsService: WorkoutSetsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.workoutPlanId = +params['workoutPlanId'];
      console.log('Workout Plan ID in child component:', this.workoutPlanId);

      this.fetchWorkoutSets();
    });
  }

  fetchWorkoutSets(): void {
    console.log('Fetching workout sets for workoutPlanId:', this.workoutPlanId);
    if(!this.workoutPlanId) {
      console.error('workoutPlanId is undefined. Cannot fetch workout sets.');
      return;
    }
    else{
      this.workoutSetsService
      .getWorkoutSetsByPlanId(this.workoutPlanId)
      .subscribe({
        next: (data: WorkoutSets[]) => {
          console.log('Received workout sets data:', data);

          this.workoutSets = data;
          console.log('Updated workoutSets array:', this.workoutSets);
        },
        error: (error: any) => {
          console.error('Error fetching workout sets:', error);
        },
      });
    }
  }

  navigateToExercises(): void {
    if (this.workoutPlanId) {
      this.router.navigate(['/exercises'], { queryParams: { workoutPlanId: this.workoutPlanId } });
    } else {
      console.error('workoutPlanId is undefined. Cannot navigate to exercises.');
    }
  }

  editWorkoutSet(workoutSet: WorkoutSets): void {
    this.router.navigate(['sets/edit/', workoutSet.workoutSetId]);
  }

  deleteWorkoutSet(workoutSetId: number): void {
    if (confirm('Are you sure you want to delete this workout set?')) {
      this.workoutSetsService.deleteWorkoutSets(workoutSetId).subscribe({
        next: () => {
          // Remove the deleted workout set from the array
          this.workoutSets = this.workoutSets.filter(ws => ws.workoutSetId !== workoutSetId);
          console.log('Workout set deleted successfully.');
        },
        error: (error: any) => {
          console.error('Error deleting workout set:', error);
        },
      });
    }
  }
}
