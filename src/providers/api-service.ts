import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { IQuestionnaireVM } from '../models/questionnaire-vm'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class APIService {
    
    _url: string;
    public headers;
    
    constructor(public http: Http) {
        this.headers = new Headers({
           'Accept':'application/json',
            'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
          });
          // Need to Change
       // this._url= "http://localhost:63529/api/";
       this._url= "http://localhost:8080/api/";
    }
   
    getQuestionnaireURL(apiName:string, apiType:string, jiraTicket: string) {
       
        let body = JSON.stringify({ 'APIName': apiName ,'APIType': apiType ,'JIRATicket': jiraTicket });

        let options = new RequestOptions({ headers: this.headers });
         return this.http.post(this._url + 'AddAPIDetails', body, options)
         .map((res: Response) => res.json());
    }

    getDecryptValue(encrypt: string) {
        let body = JSON.stringify({ 'EncryptedId': encrypt });
        let options = new RequestOptions({ headers: this.headers });
        return this.http.post(this._url + 'Decrypt', body, options)
        .map((res: Response) => res.json());
    }

    saveQuestionnaire(questionnaireObj:any) {
        let body = JSON.stringify(questionnaireObj);
        let options = new RequestOptions({ headers: this.headers });
        return this.http.post(this._url + 'AddAPIInfo', body, options)
        .map((res: Response) => res.json());
    }

    getAPIDetails(params:any) {
        let body = JSON.stringify({'StartIndex':params.offset,'PageCount':params.limit});
        let options = new RequestOptions({ headers: this.headers });
        return this.http.post(this._url + 'GetAPIDetailsList', body, options)
        .map((res: Response) => res.json());
    }
}