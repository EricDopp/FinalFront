import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { WorkoutPlan } from '../models/workout-plan';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WorkoutPlanService {
  private apiUrl = `${environment.apiUrl}/api/WorkoutPlan`;
  private workoutPlansUpdated$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  createWorkoutPlan(workoutPlan: WorkoutPlan): Observable<WorkoutPlan> {
    return this.http.post<WorkoutPlan>(this.apiUrl, workoutPlan).pipe(
      // Notify subscribers about the update after successful creation
      tap(() => this.workoutPlansUpdated$.next())
    );
  }

  getWorkoutPlansByUserId(userId: string): Observable<WorkoutPlan[]> {
    return this.http.get<WorkoutPlan[]>(`${this.apiUrl}/users/${userId}`);
  }

  getWorkoutPlanById(workoutPlanId: number): Observable<WorkoutPlan> {
    return this.http.get<WorkoutPlan>(`${this.apiUrl}/${workoutPlanId}`);
  }

  updateWorkoutPlan(
    workoutPlanId: number,
    workoutPlan: WorkoutPlan
  ): Observable<WorkoutPlan> {
    return this.http.put<WorkoutPlan>(
      `${this.apiUrl}/${workoutPlanId}`,
      workoutPlan
    );
  }

  deleteWorkoutPlan(workoutPlanId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${workoutPlanId}`);
  }

  // Add this method to get the Subject for updates
  getWorkoutPlansUpdated$(): Observable<void> {
    return this.workoutPlansUpdated$.asObservable();
  }
}
