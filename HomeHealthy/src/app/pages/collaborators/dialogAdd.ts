import {Component, Inject} from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpCollaboratorsDataService} from '../../services/http-collaborators-data.service';
import {Collaborator} from "../../models/collaborator";

// export interface DialogData {
//     id: number,
//     name: string,
//     username: string,
//     role: string
// }

@Component({
    selector: 'dialogOverviewExample',
    templateUrl: 'dialogOverviewAdd.html',
})

export class dialogAdd {

    constructor(
        public dialogRef: MatDialogRef<dialogAdd>,
        @Inject(MAT_DIALOG_DATA) public collaboratorData: Collaborator,
        private httpDataService: HttpCollaboratorsDataService
    ) {}

    onNoClick(): void {
        this.dialogRef.close('pizza');
    }

    save(collaboratorData){
        // console.log(collaboratorData);
        this.dialogRef.close(collaboratorData);
    }

}
