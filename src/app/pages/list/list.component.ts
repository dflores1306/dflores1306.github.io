import { Component, OnInit } from '@angular/core';
import { Assistance, AssistanceNew, AssistanceFilter } from 'src/app/models/assistance.model';
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
  };
  assistanceFilter: AssistanceFilter = {
    userName: '',
    minDate: '',
    maxDate: ''
  };
  assistanceList: Assistance[] = [];
  limit = 10;
  offset = 0;

  constructor(private assistanceService: AssistanceService, public dialog: MatDialog){}

  ngOnInit(): void{
    this.assistanceService.getAssistanceByPage(this.limit, this.offset)
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

  loadMore(){
    this.offset += this.limit;
    this.assistanceService.getAssistanceByPage(this.limit, this.offset)
    .subscribe(data => {
      this.assistanceList = this.assistanceList.concat(data);

    });
  }

  onSearch(){
    if (this.assistanceFilter.userName != '' || (this.assistanceFilter.minDate != '' && this.assistanceFilter.maxDate != '')){
      this.assistanceService.getAssistanceFilter(this.assistanceFilter.userName, this.assistanceFilter.minDate, this.assistanceFilter.maxDate)
      .subscribe(data => {
        this.assistanceList = data;
      });
    }

  }


}
