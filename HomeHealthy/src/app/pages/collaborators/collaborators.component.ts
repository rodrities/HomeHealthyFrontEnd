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
import {dialogAdd} from "./dialogAdd";
import {dialogEdit} from "./dialogEdit";
import {dialogDelete} from "./dialogDelete";
import {MatDialog} from "@angular/material/dialog";

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
  dialogEdit:dialogEdit;
  dialogDelete:dialogDelete;
  studentForm: NgForm;
  collaboratorData: Collaborator;
  // items:[];
  // collaboratorDataEdit: [];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'username', 'role', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isEditMode = false;

  foods: Food[] = [
    {value: 'role-0', viewValue: 'Trainers'},
    {value: 'role-1', viewValue: 'Nutritionist'}
  ];

  constructor(
              private httpDataService: HttpCollaboratorsDataService,
              private router: Router,
              public dialog: MatDialog,
              ) {
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
      this.dataSource.data = collaborator;
      console.log(collaborator);
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
  editMode():void{
    this.isEditMode = true;
  }

  Refresh(): void {
    console.log('about to reload');
    this.getAllStudents();
  }

  // animal: string;
  // name: string;

  id: number;
  name: string;
  username: string;
  role: string;
  // openDialog():void{
  //   this.animal = this.dialog.animal;
  //   this.name = this.dialog.name;
  //   this.dialog.openDialog();
  // }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(dialogAdd, {
      // height: '400px',
      // width: '800px',
      data: {
        id: this.id,
        name: this.name,
        username: this.username,
        role: this.role
      }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(`Dialog result: ${result}`);
      if(result == 'pizza'){
        console.log(`Dialog result: ${result}`);
      }else{this.save(result);}

    });

    // this.httpDataService.createItem(collaboratorData)
    //         .subscribe((response: any) => {
    //         });
  }

  save(item){
    this.httpDataService.createItem(item)
            .subscribe((response: any) => {
              this.Refresh();
            });

  }

  openDialogEdit(id,item): void{

    const dialogRef = this.dialog.open(dialogEdit, {
      // height: '400px',
      // width: '800px',
       data:item
    });
    // this.dialogEdit.showEdit(this.collaboratorDataEdit);
    // console.log(id);
    // console.log(item);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result == 'pizza'){
        console.log(`Dialog result: ${result}`);
      }else{this.update(result);}

    });

  }

  update(item){
    // console.log(item);
    this.httpDataService.updateItem(item.id,item)
        .subscribe((response: any) => {
          this.Refresh();
        });
  }


  openDialogDelete(id): void{

    const dialogRef = this.dialog.open(dialogDelete, {
      // height: '400px',
      // width: '800px',
      data:{
        id: id
      }
    });

    // this.dialogEdit.showEdit(this.collaboratorDataEdit);
    // console.log(id);
    // console.log(item);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result == 'pizza'){
        console.log(`Dialog result: ${result}`);
      }else{
        // console.log(result);
        this.delete(result);
      }

    });

  }

  delete(id){

    this.httpDataService.deleteItem(id)
        .subscribe((response: any) => {
          this.Refresh();
        });
  }

}


