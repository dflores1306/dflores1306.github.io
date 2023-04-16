import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AssistanceService } from 'src/app/services/assistance.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html'
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data:any,
     private assitanceService: AssistanceService,
     private router: Router){ }

  result: any;

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

  onConfirm(id: string){
    this.assitanceService.deleteAssistance(id)
    .subscribe( data => {
      this.result = data;
    });
    console.log(this.result);
    this.router.navigate([''])
    .then(() => {
      window.location.reload();
    });
  }
}
