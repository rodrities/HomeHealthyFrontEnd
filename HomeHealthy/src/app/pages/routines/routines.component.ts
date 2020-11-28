import { Component, OnInit } from '@angular/core';

import { Routine } from './../../models/routine';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {

  routines: Routine[] = [
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

  ngOnInit() {
  }

  clickRoutine(id: number) {
    console.log('routine');
    console.log(id);
  }

}

