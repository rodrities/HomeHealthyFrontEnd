import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Collaborator } from '../../models/collaborator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpDataService } from '../../services/http-data.service';
import * as _ from 'lodash';
import {Router} from '@angular/router';
import {HttpCollaboratorsDataService} from '../../services/http-collaborators-data.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css']
})
export class CollaboratorsComponent implements OnInit, AfterViewInit {
  @ViewChild('studentForm', { static: false })
  studentForm: NgForm;
  collaboratorData: Collaborator;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'username', 'role', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isEditMode = false;

  foods: Food[] = [
    {value: 'role-0', viewValue: 'Trainers'},
    {value: 'role-1', viewValue: 'Nutritionist'}
  ];

  constructor(private httpDataService: HttpCollaboratorsDataService, private router: Router) {
    this.collaboratorData = {} as Collaborator;
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.getAllStudents();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAllStudents(): void {
    this.httpDataService.getList().subscribe((collaborator: any) => {
      this.dataSource.data = collaborator.content;
      console.log(this.dataSource.data);
    });
  }
  editItem(element): void {
    console.log(element);
    this.collaboratorData = _.cloneDeep(element);
    this.isEditMode = true;
  }
  cancelEdit(): void {
    this.isEditMode = false;
    this.studentForm.resetForm();
  }
  deleteItem(id): void {
    this.httpDataService.deleteItem(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: Collaborator) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }
  updateStudent(): void {
    this.httpDataService.updateItem(this.collaboratorData.id, this.collaboratorData)
      .subscribe((response: any) => {
        this.dataSource.data = this.dataSource.data.map((o: Collaborator) => {
          if (o.id === response.id) {
            o = response;
          }
          return o;
        });
        this.cancelEdit();
      });
  }
  navigateToAddStudent(): void {
    this.router.navigate(['/collaborators/new']).then(() => null);
  }
  navigateToEditStudent(studentId): void {
    this.router.navigate([`/collaborators/${studentId}`]).then(() => null);
  }
  refresh(): void {
    console.log('about to reload');
    this.getAllStudents();
  }
}
