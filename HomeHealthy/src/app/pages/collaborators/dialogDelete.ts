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
    templateUrl: 'dialogOverviewDelete.html',
})

export class dialogDelete {

    constructor(
        public dialogRef: MatDialogRef<dialogDelete>,
        @Inject(MAT_DIALOG_DATA) public collaboratorDataDelete: Collaborator,
        private httpDataService: HttpCollaboratorsDataService
    ) {

    }

    onNoClick(): void {
        this.dialogRef.close('pizza');
    }

    delete(id){
        this.dialogRef.close(id);
    }


}
