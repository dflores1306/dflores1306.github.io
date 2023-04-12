import { Injectable } from '@angular/core';
import { retry, catchError, map } from 'rxjs/operators';

import { Assistance } from 'src/app/models/assistance.model';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {
  assistanceList: Assistance[] = [];
  assistance: Assistance = {
    userId: '0001',
    userName: 'AAA',
    date: '2022-01-01',
    punchIn: '9:00 AM',
    punchOut: '6:00 PM'
  }
  assistance2: Assistance = {
    userId: '0002',
    userName: 'AABA',
    date: '2022-01-03',
    punchIn: '9:00 AM',
    punchOut: '6:00 PM'
  }
  constructor() {
  }

  addAssistance(assistance: Assistance){
    console.log("create assistance works: ",assistance);
  }
  updateAssistance(assistance: Assistance){
    console.log("update assistance works: ",assistance);
  }
  deleteAssistance(assistance: Assistance){
    console.log("delete assistance works: ",assistance);
  }
  getAssistanceList(){
    this.assistanceList.push(this.assistance);
    this.assistanceList.push(this.assistance2);
    return this.assistanceList;
  }


}
