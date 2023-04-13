import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AssistanceService } from 'src/app/services/assistance.service';
import { Assistance } from 'src/app/models/assistance.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit{
  constructor(private route: ActivatedRoute, private assistanceService: AssistanceService){ }
  id : string = '';
  assistance: Assistance = {
    id: '',
    userId: '',
    userName: '',
    date: '',
    punchIn: '',
    punchOut: ''
  }
  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
    console.log(this.id);
    this.assistance = this.assistanceService.getAssistanceItem(this.id);
  }
}
