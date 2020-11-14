import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DietsComponent} from './pages/diets/diets.component';
import {RoutinesComponent} from './pages/routines/routines.component';
import {SessionsComponent} from './pages/sessions/sessions.component';
import {ProvidersComponent} from './pages/providers/providers.component';





const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'diets', component: DietsComponent },
  { path: 'routines', component: RoutinesComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'sessions', component: SessionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
