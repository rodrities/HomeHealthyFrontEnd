import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Diet } from './../models/diet';
import {Observable} from 'rxjs';
import {Customer} from '../models/customer';


@Injectable({
  providedIn: 'root'
})
export class HttpDietService {

  /*diets: Diet[] = [
    {
      id: '1',
      title: 'Camiseta',
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      title: 'Hoodie',
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      title: 'Mug',
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      title: 'Pin',
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      title: 'Stickers',
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      title: 'Stickers',
      description: 'bla bla bla bla bla'
    },
  ];*/

  basePath = 'http://localhost:8080/api/diets';
  constructor(private http: HttpClient) { }
  // Http Default Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  getAllProducts(id){
    return this.http.get<Diet[]>(`${this.basePath}`);
  }

  /*
  getAllDiets() {
    return this.diets;

  }
*//*
  getDiet(id: string) {
    return this.diets.find(item => id === item.id);
  }*/
}

