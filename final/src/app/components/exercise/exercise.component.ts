import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseExerciseResponse } from 'src/app/models/exercise-response';
import { WorkoutSets } from 'src/app/models/workout-sets';
import { ExerciseService } from 'src/app/services/exercise.service';
import { WorkoutSetsService } from 'src/app/services/workout-sets.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent implements OnInit {
  bodyPartList: string[] = [
    'back',
    'cardio',
    'chest',
    'lower arms',
    'lower legs',
    'neck',
    'shoulders',
    'upper arms',
    'upper legs',
    'waist',
  ];
  equipmentList: string[] = [
    'assisted',
    'band',
    'barbell',
    'body weight',
    'bosu ball',
    'cable',
    'dumbbell',
    'elliptical machine',
    'ez barbell',
    'hammer',
    'kettlebell',
    'leverage machine',
    'medicine ball',
    'olympic barbell',
    'resistance band',
    'roller',
    'rope',
    'skierg machine',
    'sled machine',
    'smith machine',
    'stability ball',
    'stationary bike',
    'stepmill machine',
    'tire',
    'trap bar',
    'upper body ergometer',
    'weighted',
    'wheel roller',
  ];
  targetList: string[] = [
    'abductors',
    'abs',
    'adductors',
    'biceps',
    'calves',
    'cardiovascular system',
    'delts',
    'forearms',
    'glutes',
    'hamstrings',
    'lats',
    'levator scapulae',
    'pectorals',
    'quads',
    'serratus anterior',
    'spine',
    'traps',
    'triceps',
    'upper back',
  ];
  selectedSearchCategory: string = 'bodyPart';
  showCriteriaDropdown: boolean = true;
  selectedSearchCriteria: string = 'bodyPart';
  searchCriteriaList: string[] = this.bodyPartList;
  filteredData: BaseExerciseResponse[] = [];

  selectedBodyPart: string = '';
  selectedTarget: string = '';
  selectedEquipment: string = '';

  constructor(
    private ExerciseService: ExerciseService,
    private workoutSetsService: WorkoutSetsService,
    private router: Router
  ) {}
  

  ngOnInit(): void {
    this.selectedSearchCriteria = 'bodyPart';
    this.searchCriteriaList = this.getCriteriaListByCategory(
      this.selectedSearchCategory
    );
  }

  onSearchCategoryChange() {
    this.selectedSearchCriteria = '';
    this.showCriteriaDropdown = true;
    this.searchCriteriaList = this.getCriteriaListByCategory(
      this.selectedSearchCategory
    );
  }

  search() {
    this.callApiBasedOnSearchCategory();
  }

  private getCriteriaListByCategory(category: string): string[] {
    switch (category) {
      case 'bodyPart':
        return this.bodyPartList;
      case 'target':
        return this.targetList;
      case 'equipment':
        return this.equipmentList;
      default:
        return [];
    }
  }

  private callApiBasedOnSearchCategory() {
    switch (this.selectedSearchCategory) {
      case 'bodyPart':
        this.ExerciseService.getExercisesByBodyPart(
          this.selectedSearchCriteria
        ).subscribe(
          (data) => {
            console.log('API call successful for body part:', data);
            this.filteredData = Array.isArray(data)
              ? data
              : ([data] as BaseExerciseResponse[]);
          },
          (error) => {
            console.error('Error fetching data based on body part:', error);
          }
        );
        break;
      case 'target':
        this.ExerciseService.getExercisesByTarget(
          this.selectedSearchCriteria
        ).subscribe(
          (data) => {
            console.log('API call successful for target muscle:', data);
            this.filteredData = Array.isArray(data)
              ? data
              : ([data] as BaseExerciseResponse[]);
          },
          (error) => {
            console.error('Error fetching data based on target muscle:', error);
          }
        );
        break;
      case 'equipment':
        this.ExerciseService.getExercisesByEquipment(
          this.selectedSearchCriteria
        ).subscribe(
          (data) => {
            console.log('API call successful for equipment used:', data);
            this.filteredData = Array.isArray(data)
              ? data
              : ([data] as BaseExerciseResponse[]);
          },
          (error) => {
            console.error(
              'Error fetching data based on equipment used:',
              error
            );
          }
        );
        break;
      default:
        console.error('Invalid search category.');
        break;
    }
  }

  addExerciseToWorkoutSet(exercise: BaseExerciseResponse): void {
    const queryParams = this.router.parseUrl(this.router.url).queryParams;
    const workoutSetId: number = queryParams['workoutSetId'] ? +queryParams['workoutSetId'] : 0;
    const workoutPlanId: number = queryParams['workoutPlanId'] ? +queryParams['workoutPlanId'] : 0;
  
    const newWorkoutSet: WorkoutSets = {
      workoutSetId: workoutSetId,
      workoutPlanId: workoutPlanId, // Adjust the workout plan ID as needed
      userId: 'user123',
      exerciseDBId: exercise.id,
      exerciseName: exercise.name,
      repCount: 0,
      weight: 0,
      weightUnit: '',
      workoutSetCount: 0,
      sortOrder: 0,
    };
  
    this.workoutSetsService.createWorkoutSets(newWorkoutSet).subscribe({
      next: (createdWorkoutSet: WorkoutSets) => {
        console.log('Exercise added to workout set:', createdWorkoutSet);
    
        // After adding the exercise, navigate back to the workoutSetsList
        this.router.navigate(['/sets'], { 
          queryParams: { 
            workoutPlanId: workoutPlanId, 
            exerciseId: exercise.id, 
            exerciseName: exercise.name 
          } 
        });
      },
      error: (error: any) => {
        console.error('Error adding exercise to workout set:', error);
      },
    });
    
  }  
}
