import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';

import { Assistance, AssistanceNew } from 'src/app/models/assistance.model';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {
  private endPoint = '/api/v1/assistances';
  assistanceList: Assistance[] = [];

  constructor(private http: HttpClient) {
  }

  addAssistance(assistance: AssistanceNew){
    return this.http.post<Assistance>(this.endPoint,assistance);
  }
  updateAssistance(id: string, assistance: Assistance){
    return this.http.patch(`${this.endPoint}/${id}`, assistance);
  }
  deleteAssistance(id: string){
    return this.http.delete<boolean>(`${this.endPoint}/${id}`);
  }
  getAssistanceList(){
    return this.http.get<Assistance[]>(this.endPoint);
  }
  getAssistanceByPage(limit: number, offset: number){
    return this.http.get<Assistance[]>(this.endPoint, {
      params: {limit, offset}
    });
  }
  getAssistanceFilter(filterName: string, minDate: string, maxDate: string){
    let queryParams = new HttpParams();
    if(filterName != ''){
      queryParams.set('filterName', filterName);
      return this.http.get<Assistance[]>(this.endPoint, {  params: {filterName} });
    }
    else if(minDate != '' && maxDate != ''){
      return this.http.get<Assistance[]>(this.endPoint, {  params: {minDate, maxDate} });
    } else {
      return this.http.get<Assistance[]>(this.endPoint, {  params: {filterName, minDate, maxDate} });
    }

  }
  getAssistanceItem(id: string){
    return this.http.get<Assistance>(`${this.endPoint}/${id}`);
  }


}
