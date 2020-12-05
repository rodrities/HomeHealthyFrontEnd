import {Component, Inject} from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpCollaboratorsDataService} from '../../services/http-collaborators-data.service';
import {Collaborator} from "../../models/collaborator";


import {Observable} from "rxjs";

// export interface DialogData {
//     id: number,
//     name: string,
//     username: string,
//     role: string
// }

@Component({
    selector: 'dialogOverviewExample',
    templateUrl: 'dialogOverviewEdit.html',
})

export class dialogEdit {

    constructor(
        public dialogRef: MatDialogRef<dialogEdit>,
        @Inject(MAT_DIALOG_DATA) public collaboratorDataEdit: Collaborator,
        private httpDataService: HttpCollaboratorsDataService
    ) {

    }

    onNoClick(): void {
        this.dialogRef.close('pizza');
    }

    update(collaboratorData){
        // console.log(collaboratorData);
        this.dialogRef.close(collaboratorData);
    }




}
