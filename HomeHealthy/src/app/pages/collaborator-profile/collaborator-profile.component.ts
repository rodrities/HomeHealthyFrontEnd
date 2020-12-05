import { Component, OnInit } from '@angular/core';
import {Collaborator} from '../../models/collaborator';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpCollaboratorsDataService} from '../../services/http-collaborators-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-collaborator-profile',
  templateUrl: './collaborator-profile.component.html',
  styleUrls: ['./collaborator-profile.component.css']
})
export class CollaboratorProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private collaboratorService: HttpCollaboratorsDataService
  ) { }

  ngOnInit() {
  }

  // test(id): void {
  //   this.httpRegisterService.createdRegister()
  //       .subscribe((register: any) => {
  //         this.dataSource.data = register.content;
  //         console.log(this.dataSource.data);
  //       });
  // }

}
