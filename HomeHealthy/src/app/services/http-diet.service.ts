import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Diet } from './../models/diet';


@Injectable({
  providedIn: 'root'
})
export class HttpDietService {

  diets: Diet[] = [
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
  ];

  constructor() { }

  getAllDiets() {
    return this.diets;
  }

  getDiet(id: string) {
    return this.diets.find(item => id === item.id);
  }
}

