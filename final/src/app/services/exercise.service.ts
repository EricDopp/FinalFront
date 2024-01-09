import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getExerciseDBsByBodyPart(bodyPart: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/ExerciseDB/exerciseByBodyPart/${bodyPart}`);
  }

  getBodyPartList(): Observable<string> {
    try{
      console.log('What is up bro?')
      return this.http.get<string>(`${this.apiUrl}/api/ExerciseDB/exercises/bodyPartList`);
    }
    catch (error:any){
      console.log(error);
    }
    return of ('')
  }

  getEquipmentList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/ExerciseDB/exercises/equipmentList`);
  }

  getTargetList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/ExerciseDB/exercises/targetList`);
  }

  getExercisesByEquipment(equipment: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/ExerciseDB/exercises/equipment/${equipment}`);
  }

  getExercisesByTarget(target: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/ExerciseDB/exercises/target/${target}`);
  }

  getExerciseById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/ExerciseDB/exercises/exercise/${id}`);
  }

  getExerciseByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/ExerciseDB/exercises/name/${name}`);
  }

  getAllExercises(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/ExerciseDB/exercises`);
  }
}