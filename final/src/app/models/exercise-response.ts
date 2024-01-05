export interface BaseExerciseResponse {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
}

export interface ExerciseResponse extends BaseExerciseResponse {}

export interface ListResponse extends BaseExerciseResponse {
  list: string[];
}
