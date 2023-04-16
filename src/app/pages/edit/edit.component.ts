import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AssistanceService } from 'src/app/services/assistance.service';
import { Assistance } from 'src/app/models/assistance.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  constructor(private route: ActivatedRoute, private assistanceService: AssistanceService, private router: Router){ }
  id : string = '';
  assistance: Assistance = {
    id: '',
    userId: '',
    userName: '',
    date: '',
    punchIn: '',
    punchOut: ''
  }
  validForm: boolean = true;
  status: string = '';
  msgError: string = '';
  updateResult: any;

  ngOnInit(){
    this.status = '';
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );

    this.assistanceService.getAssistanceItem(this.id)
    .subscribe( data => {
      this.assistance = data;
    });
  }

  onUpdate(){
    this.assistanceService.updateAssistance(this.assistance.id, this.assistance)
    .subscribe( data => {
      this.updateResult = data;
    });
    this.status = '200';
  }
}
