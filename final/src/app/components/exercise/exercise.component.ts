import { Component, OnInit } from '@angular/core';
import {
  BaseExerciseResponse,
  ListResponse,
} from 'src/app/models/exercise-response';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent implements OnInit {
  bodyPartExercises: BaseExerciseResponse[] = [];
  bodyPartList: string[] = [];

  constructor(private ExerciseService: ExerciseService) {}

  ngOnInit(): void {
    // Fetch exercises by body part
    this.ExerciseService.getExercisesByBodyPart('back').subscribe(
      (data) => {
        this.bodyPartExercises = data;
      },
      (error) => {
        console.error('Error fetching exercises by body part:', error);
      }
    );

    // Fetch body part list
    this.ExerciseService.getBodyPartList().subscribe(
      (data: string[]) => {
        this.bodyPartList = data;
      },
      (error) => {
        console.error('Error fetching body part list:', error);
      }
    );
  }
}
