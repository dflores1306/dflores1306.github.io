import { Injectable } from '@angular/core';
import { retry, catchError, map } from 'rxjs/operators';

import { Assistance } from 'src/app/models/assistance.model';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {
  assistanceList: Assistance[] = [];

  constructor() {
  }

  createAssistance(assistance: Assistance){
    console.log("create assistance works: ",assistance);
  }

}
