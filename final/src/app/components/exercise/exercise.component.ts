import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent implements OnInit {
  bodyPartList: string = '';

  constructor(private ExerciseService: ExerciseService) {}

  ngOnInit(): void {
   this.getBodyPartList();
  }

  getBodyPartList(): void{
    this.ExerciseService.getBodyPartList().subscribe(
      data => {
        this.bodyPartList = data;
      },
      error => {
        console.error('Error fetching body part list:', error);
      }
    )
  }
}
