import { Injectable } from '@angular/core';
import { retry, catchError, map } from 'rxjs/operators';

import { Assistance, AssistanceNew } from 'src/app/models/assistance.model';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {
  assistanceList: Assistance[] = [];
  assistance: Assistance = {
    id: '1',
    userId: '0001',
    userName: 'AAA',
    date: '2022-01-01',
    punchIn: '9:00 AM',
    punchOut: '6:00 PM'
  }
  assistance2: Assistance = {
    id: '2',
    userId: '0002',
    userName: 'AABA',
    date: '2022-01-03',
    punchIn: '9:00 AM',
    punchOut: '6:00 PM'
  }
  constructor() {
  }

  addAssistance(assistance: AssistanceNew){
    console.log("create assistance works: ",assistance);
  }
  updateAssistance(assistance: Assistance){
    console.log("update assistance works: ",assistance);
  }
  deleteAssistance(assistance: Assistance){
    console.log("delete assistance works: ",assistance);
  }
  getAssistanceList(){
    this.assistanceList = [];
    this.assistanceList.push(this.assistance);
    this.assistanceList.push(this.assistance2);
    return this.assistanceList;
  }
  getAssistanceItem(id: string){
    return this.assistance;
  }


}
