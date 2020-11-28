import {Component, OnInit, ViewChild} from '@angular/core';

import { Diet } from './../../models/diet';
import {HttpDietService} from '../../services/http-diet.service';
import {Session} from '../../models/session';
import {NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.css']
})
export class DietsComponent implements OnInit {

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

  @ViewChild('sessionForm', {static: false})
  sessionForm: NgForm;
  dietData: Diet;
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private httpDietService: HttpDietService) {
    this.dietData = {} as Diet;
  }

  ngOnInit(): void{
    this.retrieveSessionByCustomer(1);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  clickDiet(id: number) {
    console.log('diet');
    console.log(id);
  }

  retrieveSessionByCustomer(id): void {
    this.httpDietService.getAllProducts(id)
      .subscribe((diet: any) => {
        this.dataSource.data = diet.content;
        console.log(this.dataSource.data);
      });
  }

  /*fetchDiets() {
    this.httpDietService.getAllProducts(1)
      .subscribe( (diets: any) => {
        this.diets = diets.content;
      });
  }*/

}
