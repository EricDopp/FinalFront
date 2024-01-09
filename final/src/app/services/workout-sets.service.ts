import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkoutSets } from '../models/workout-sets';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WorkoutSetsService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  createWorkoutSets(workoutSets: WorkoutSets): Observable<WorkoutSets> {
    return this.http.post<WorkoutSets>(this.apiUrl, workoutSets);
  }

  getWorkoutSetsByUserId(userId: string): Observable<WorkoutSets[]> {
    return this.http.get<WorkoutSets[]>(`${this.apiUrl}/${userId}`);
  }

  updateWorkoutSets(
    workoutSetId: number,
    workoutSets: WorkoutSets
  ): Observable<WorkoutSets> {
    return this.http.put<WorkoutSets>(
      `${this.apiUrl}/${workoutSetId}`,
      workoutSets
    );
  }

  deleteWorkoutSets(workoutSetId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${workoutSetId}`);
  }
}
