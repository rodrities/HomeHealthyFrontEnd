import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DietsComponent} from './pages/diets/diets.component';
import {DietComponent} from './pages/diet/diet.component';
import {RoutinesComponent} from './pages/routines/routines.component';
import {RoutineComponent} from './pages/routine/routine.component';
import {SessionsComponent} from './pages/sessions/sessions.component';

import {StudentsComponent} from './pages/students/students.component';
import {CollaboratorsComponent} from './pages/collaborators/collaborators.component';
import {DietDetailComponent} from './pages/diet-detail/diet-detail.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {CollaboratorProfileComponent} from './pages/collaborator-profile/collaborator-profile.component';




const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'diets', component: DietsComponent },
  { path: 'diet', component: DietComponent },
  { path: 'diets/:id', component: DietDetailComponent },
  { path: 'routines', component: RoutinesComponent },
  { path: 'routine', component: RoutineComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'collaborators', component: CollaboratorsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'collaboratorprofile/:id', component: CollaboratorProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
