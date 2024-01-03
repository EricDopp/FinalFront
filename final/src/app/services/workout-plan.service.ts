import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkoutPlan } from '../models/workout-plan';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})

export class WorkoutPlanService {
  private apiUrl = `${environment.exerciseDbApiUrl}`;

  constructor(private http: HttpClient) {}

  createWorkoutPlan(workoutPlan: WorkoutPlan): Observable<WorkoutPlan> {
    return this.http.post<WorkoutPlan>(this.apiUrl, workoutPlan);
  }

  getWorkoutPlansByUserId(userId: string): Observable<WorkoutPlan[]> {
    return this.http.get<WorkoutPlan[]>(`${this.apiUrl}/${userId}`);
  }

  updateWorkoutPlan(workoutPlanId: number, workoutPlan: WorkoutPlan): Observable<WorkoutPlan> {
    return this.http.put<WorkoutPlan>(`${this.apiUrl}/${workoutPlanId}`, workoutPlan);
  }

  deleteWorkoutPlan(workoutPlanId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${workoutPlanId}`);
  }
}