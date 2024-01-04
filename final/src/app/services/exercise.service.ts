import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { ExerciseResponse, ListResponse } from '../models/exercise-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private apiUrl = `${environment.exerciseDbApiUrl}`;
  private rapidApiKey = ''; // Replace with your actual RapidAPI key but only when testing

  constructor(private http: HttpClient) {}

  getExercisesByBodyPart(bodyPart: string): Observable<ExerciseResponse[]> {
    const url = `${this.apiUrl}/exercises/bodyPart/${bodyPart}`;
    return this.makeGetRequest<ExerciseResponse[]>(url).pipe(
      tap((data) => console.log('Exercises by Body Part Data:', data)), // Log the response data
      catchError((error) => {
        console.error('Error fetching exercises by body part:', error);
        throw error;
      })
    );
  }
  getExercisesByEquipmentType(type: string): Observable<ExerciseResponse[]> {
    const url = `${this.apiUrl}/exercises/equipment/${type}`;
    return this.makeGetRequest<ExerciseResponse[]>(url);
  }
  getExercisesByTarget(target: string): Observable<ExerciseResponse[]> {
    const url = `${this.apiUrl}/exercises/target/${target}`;
    return this.makeGetRequest<ExerciseResponse[]>(url);
  }
  getExerciseById(id: string): Observable<ExerciseResponse> {
    const url = `${this.apiUrl}/exercises/exercise/${id}`;
    return this.makeGetRequest<ExerciseResponse>(url);
  }
  getExercisesByName(name: string): Observable<ExerciseResponse[]> {
    const url = `${this.apiUrl}/exercises/name/${name}`;
    return this.makeGetRequest<ExerciseResponse[]>(url);
  }
  getAllExercises(): Observable<ExerciseResponse[]> {
    const url = `${this.apiUrl}/exercises`;
    return this.makeGetRequest<ExerciseResponse[]>(url);
  }
  // getBodyPartList(): Observable<ListResponse> {
  //   const url = `${this.apiUrl}/exercises/bodyPartList`;
  //   return this.makeGetRequest<ListResponse>(url);
  // }
  getBodyPartList(): Observable<string[]> {
    const url = `${this.apiUrl}/exercises/bodyPartList`;
    return this.makeGetRequest<string[]>(url).pipe(
      tap((data) => console.log('Body Part List Data:', data)),
      catchError((error) => {
        console.error('Error fetching body part list:', error);
        throw error;
      })
    );
  }
  getEquipmentList(): Observable<ListResponse> {
    const url = `${this.apiUrl}/exercises/equipmentList`;
    return this.makeGetRequest<ListResponse>(url);
  }
  getTargetList(): Observable<ListResponse> {
    const url = `${this.apiUrl}/exercises/targetList`;
    return this.makeGetRequest<ListResponse>(url);
  }
  private makeGetRequest<T>(url: string): Observable<T> {
    return this.http.get<T>(url, { headers: this.getHeaders() });
  }
  private getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('X-RapidAPI-Key', this.rapidApiKey)
      .set('X-RapidAPI-Host', 'exercisedb.p.rapidapi.com');
  }
}
