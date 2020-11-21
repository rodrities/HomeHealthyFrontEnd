import { Component, OnInit } from '@angular/core';

import { Diet } from './../../models/diet';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.css']
})
export class DietsComponent implements OnInit {

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

  ngOnInit() {
  }

  clickDiet(id: number) {
    console.log('diet');
    console.log(id);
  }

}
