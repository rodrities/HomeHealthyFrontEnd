import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Collaborator} from '../../models/collaborator';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpCollaboratorsDataService} from '../../services/http-collaborators-data.service';
import {Observable} from 'rxjs';
import {Diet} from "../../models/diet";
import {MatTableDataSource} from "@angular/material/table";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-collaborator-profile',
  templateUrl: './collaborator-profile.component.html',
  styleUrls: ['./collaborator-profile.component.css']
})
export class CollaboratorProfileComponent implements OnInit {

  studentData: Collaborator;
  dataSource = new MatTableDataSource();
  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private collaboratorService: HttpCollaboratorsDataService,
    private httpDataService: HttpCollaboratorsDataService, private router: Router
  ) {this.studentData = {} as Collaborator;}


  ngOnInit(): void{
    console.log(this.route.snapshot.paramMap.get('id'));
    //this.getAllStudents();
  }

  navigateToAddStudent(): void {
    this.router.navigate(['/collaborators']).then(() => null);
  }

  // getAllStudents(): void {
  //   this.httpDataService.getList().subscribe((response: any) => {
  //     this.dataSource.data = response;
  //     console.log(this.dataSource.data);
  //   });
  // }


}
