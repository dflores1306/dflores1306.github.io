import { Component, OnInit } from '@angular/core';
import { Assistance, AssistanceNew } from 'src/app/models/assistance.model';
import { AssistanceService } from 'src/app/services/assistance.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/utils/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit{
  assistance: Assistance = {
    id: '',
    userId: '',
    userName: '',
    date: '',
    punchIn: '',
    punchOut: ''
  }
  assistanceList: Assistance[] = [];

  constructor(private assistanceService: AssistanceService, public dialog: MatDialog){}

  ngOnInit(): void{
    this.assistanceService.getAssistanceByPage(10, 0)
    .subscribe(data => {
      this.assistanceList = data;
    });
  }

  confirmDelete(enterAnimationDuration: string, exitAnimationDuration: string, id: string): void {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {id: id},
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }


}
