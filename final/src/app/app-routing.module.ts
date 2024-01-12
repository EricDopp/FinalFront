import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { WorkoutSetsDetailsComponent } from './components/workout-sets/workout-sets-details/workout-sets-details.component';
import { WorkoutSetsCreateComponent } from './components/workout-sets/workout-sets-create/workout-sets-create.component';
import { WorkoutSetsEditComponent } from './components/workout-sets/workout-sets-edit/workout-sets-edit.component';
import { WorkoutSetsListComponent } from './components/workout-sets/workout-sets-list/workout-sets-list.component';
import { WorkoutPlanCreateComponent } from './components/workout-plan/workout-plan-create/workout-plan-create.component';
import { WorkoutPlanDetailsComponent } from './components/workout-plan/workout-plan-details/workout-plan-details.component';
import { WorkoutPlanEditComponent } from './components/workout-plan/workout-plan-edit/workout-plan-edit.component';
import { WorkoutPlanListComponent } from './components/workout-plan/workout-plan-list/workout-plan-list.component';

const routes: Routes = [
  {path: '',  component:WorkoutPlanListComponent, pathMatch: 'full'},
  {path: 'exercises', component:ExerciseComponent},
  {path: 'plans/make', component:WorkoutPlanCreateComponent},
  {path: 'plans/:id', component:WorkoutPlanDetailsComponent},
  {path: 'plans/edit', component:WorkoutPlanEditComponent},
  {path: 'plans', component:WorkoutPlanListComponent},
  {path: 'sets/make', component:WorkoutSetsCreateComponent},
  {path: 'sets/:id', component:WorkoutSetsDetailsComponent},
  {path: 'sets/edit', component:WorkoutSetsEditComponent},
  {path: 'sets', component:WorkoutSetsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
