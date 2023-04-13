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

  ngOnInit(){
    this.status = '';
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );

    this.assistance = this.assistanceService.getAssistanceItem(this.id);
  }

  onUpdate(){
    this.assistanceService.updateAssistance(this.assistance);
    this.status = '200';

  }
}
