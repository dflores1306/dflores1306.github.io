import { Component } from '@angular/core';

import { Assistance } from 'src/app/models/assistance.model';
import { AssistanceService } from 'src/app/services/assistance.service';

import * as XLSX from 'xlsx';
import { formatDate } from "@angular/common";
type AOA = any[][];

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  assistance: Assistance = {
    userId: '',
    userName: '',
    date: '',
    punchIn: '',
    punchOut: ''
  }
  assistanceList: Assistance[] = [];
  data: any[][] = [ [1, 2], [3, 4] ];
  format = 'yyyy-MM-dd';
  formatTime = 'h:mm a';
  locale = 'en-US';
  isValidFile: boolean = true;
  constructor(private assistaceService: AssistanceService){

  }


  onChangeFile(event: any){
    this.assistanceList = [];
    const target: DataTransfer = <DataTransfer>(event.target);
    this.isValidFile = !!target.files[0].name.match(/(.xls|.xlsx)/);
    if (target.files.length !== 1){
      this.isValidFile = false;
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) =>{
      const buffer: ArrayBuffer  = e.target.result;
      const excel: XLSX.WorkBook = XLSX.read(buffer, { type: 'binary', cellDates: true });

      const sheetName: string = excel.SheetNames[0];
      const currentSheet: XLSX.WorkSheet = excel.Sheets[sheetName];
      this.data = <AOA>XLSX.utils.sheet_to_json(currentSheet, {header: 1});

      this.data.forEach((assistanceItem, index) =>  {
        if(index > 0 && assistanceItem.length == 5){
          this.assistanceList[index-1] = {
            userId: assistanceItem[0],
            userName: assistanceItem[1],
            date: formatDate(assistanceItem[2], this.format, this.locale),
            punchIn: formatDate(assistanceItem[3], this.formatTime, this.locale),
            punchOut: formatDate(assistanceItem[4], this.formatTime, this.locale)
          };
        }
      });
    }
    reader.readAsArrayBuffer(target.files[0]);
  }

  importRecords(){
    this.assistanceList.forEach(item => {
      this.assistaceService.addAssistance(item);
    });
  }
}
