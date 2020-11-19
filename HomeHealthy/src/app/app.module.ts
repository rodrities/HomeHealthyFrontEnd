import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DietsComponent } from './pages/diets/diets.component';
import { RoutinesComponent } from './pages/routines/routines.component';
import { SessionsComponent } from './pages/sessions/sessions.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './pages/students/students.component';
import { CollaboratorsComponent } from './pages/collaborators/collaborators.component';
import { DietComponent } from './pages/diet/diet.component';
import { RoutineComponent } from './pages/routine/routine.component';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { DietDetailComponent } from './pages/diet-detail/diet-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CollaboratorProfileComponent } from './pages/collaborator-profile/collaborator-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DietsComponent,
    RoutinesComponent,
    SessionsComponent,
    StudentsComponent,
    CollaboratorsComponent,
    DietComponent,
    RoutineComponent,
    DietDetailComponent,
    LoginComponent,
    RegisterComponent,
    CollaboratorProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
