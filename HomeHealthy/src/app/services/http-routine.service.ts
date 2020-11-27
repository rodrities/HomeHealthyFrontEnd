import { Injectable } from '@angular/core';
import {Routine} from "../models/routine";

@Injectable({
  providedIn: 'root'
})
export class HttpRoutineService {
  routines: Routine[] = [
    {
      id: '1',
      title: 'Musculacion',
      description: 'Forjar los ricos muscles '
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

  getAllRoutines() {
    return this.routines;
  }

  getRoutine(id: string) {
    return this.routines.find(item => id === item.id);
  }
}
