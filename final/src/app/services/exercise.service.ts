import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { BaseExerciseResponse } from '../models/exercise-response';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getExercisesByBodyPart(bodyPart: string): Observable<BaseExerciseResponse> {
    return this.http.get<BaseExerciseResponse>(
      `${this.apiUrl}/api/ExerciseDB/exerciseByBodyPart/${bodyPart}`
    );
  }

  getBodyPartList(): Observable<string> {
    try {
      return this.http.get<string>(
        `${this.apiUrl}/api/ExerciseDB/exercises/bodyPartList`
      );
    } catch (error: any) {
      console.log(error);
    }
    return of('');
  }

  getEquipmentList(): Observable<string> {
    try {
      return this.http.get<string>(
        `${this.apiUrl}/api/ExerciseDB/exercises/equipmentList`
      );
    } catch (error: any) {
      console.log(error);
    }
    return of('');
  }

  getTargetList(): Observable<string> {
    try {
      return this.http.get<string>(
        `${this.apiUrl}/api/ExerciseDB/exercises/targetList`
      );
    } catch (error: any) {
      console.log(error);
    }
    return of('');
  }

  getExercisesByEquipment(equipment: string): Observable<BaseExerciseResponse> {
    return this.http.get<BaseExerciseResponse>(
      `${this.apiUrl}/api/ExerciseDB/exercises/equipment/${equipment}`
    );
  }

  getExercisesByTarget(target: string): Observable<BaseExerciseResponse> {
    return this.http.get<BaseExerciseResponse>(
      `${this.apiUrl}/api/ExerciseDB/exercises/target/${target}`
    );
  }

  getExerciseById(id: string): Observable<BaseExerciseResponse> {
    return this.http.get<BaseExerciseResponse>(
      `${this.apiUrl}/api/ExerciseDB/exercises/exercise/${id}`
    );
  }

  getExerciseByName(name: string): Observable<BaseExerciseResponse> {
    return this.http.get<BaseExerciseResponse>(
      `${this.apiUrl}/api/ExerciseDB/exercises/name/${name}`
    );
  }

  getAllExercises(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/ExerciseDB/exercises`);
  }
}
