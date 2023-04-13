import { Component, OnInit } from '@angular/core';
import { Assistance, AssistanceNew } from 'src/app/models/assistance.model';
import { AssistanceService } from 'src/app/services/assistance.service';

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

  constructor(private assistanceService: AssistanceService){}

  ngOnInit(): void{
    this.assistanceList = this.assistanceService.getAssistanceList();
  }
}
