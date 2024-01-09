import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { ExerciseService } from './services/exercise.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment.development';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { WorkoutPlanListComponent } from './components/workout-plan/workout-plan-list/workout-plan-list.component';
import { WorkoutPlanDetailsComponent } from './components/workout-plan/workout-plan-details/workout-plan-details.component';
import { WorkoutPlanCreateComponent } from './components/workout-plan/workout-plan-create/workout-plan-create.component';
import { WorkoutPlanEditComponent } from './components/workout-plan/workout-plan-edit/workout-plan-edit.component';
import { WorkoutSetsListComponent } from './components/workout-sets/workout-sets-list/workout-sets-list.component';
import { WorkoutSetsDetailsComponent } from './components/workout-sets/workout-sets-details/workout-sets-details.component';
import { WorkoutSetsCreateComponent } from './components/workout-sets/workout-sets-create/workout-sets-create.component';
import { WorkoutSetsEditComponent } from './components/workout-sets/workout-sets-edit/workout-sets-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    AuthButtonComponent,
    HeaderComponent,
    workout-components
    WorkoutPlanListComponent,
    WorkoutPlanDetailsComponent,
    WorkoutPlanCreateComponent,
    WorkoutPlanEditComponent,
    WorkoutSetsListComponent,
    WorkoutSetsDetailsComponent,
    WorkoutSetsCreateComponent,
    WorkoutSetsEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://icy-river-0a26b650f.4.azurestaticapps.net', 
      },
    }),
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
