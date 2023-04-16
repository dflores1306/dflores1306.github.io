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
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', "Access-Control-Allow-Methods": "GET, POST OPTIONS"});
    const options = { headers: headers };
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
  getAssistanceItem(id: string){
    return this.http.get<Assistance>(`${this.endPoint}/${id}`);
  }


}
