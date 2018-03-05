import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
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
        this._url= "http://localhost:63529/api/";
    }
   
    getQuestionnaireURL(jiraTicket: string) {
        let body = JSON.stringify({ 'JIRATicket': jiraTicket });
        let options = new RequestOptions({ headers: this.headers });
        return this.http.post(this._url + 'GetQuestionnaireURL', body, options)
        .map((res: Response) => res.json());
    }

    getDecryptValue(encrypt: string) {
        let body = JSON.stringify({ 'EncryptText': encrypt });
        let options = new RequestOptions({ headers: this.headers });
        return this.http.post(this._url + 'DecryptValue', body, options)
        .map((res: Response) => res.json());
    }

    saveQuestionnaire(questionnaireObj:any) {
        let body = JSON.stringify(questionnaireObj);
        let options = new RequestOptions({ headers: this.headers });
        return this.http.post(this._url + 'SaveQuestionnaire', body, options)
        .map((res: Response) => res.json());
    }
}