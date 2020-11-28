
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Collaborator} from '../models/collaborator';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpCollaboratorsDataService {
  // Students Endpoint
  //basePath = 'http://homehealthyapi.herokuapp.com/api/collaborators';

  //basePath = 'http://localhost:3000/api/collaborators';
  basePath = 'http://localhost:8080/api/collaborators';

  constructor(private http: HttpClient) { }
  // Http Default Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  // API Error Handling
  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }
  // Create Student
  createItem(item): Observable<Collaborator> {
    return this.http.post<Collaborator>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Student by Id
  getItem(id): Observable<Collaborator> {
    return this.http.get<Collaborator>(`${this.basePath}/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Student Data
  getList(): Observable<Collaborator>{
    return this.http.get<Collaborator>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Update Student
  updateItem(id, item): Observable<Collaborator>{
    return this.http.put<Collaborator>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Delete Student
  deleteItem(id): Observable<any> {
    return this.http.delete<Collaborator>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
