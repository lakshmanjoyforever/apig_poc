import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { IQuestionnaireVM } from '../models/questionnaire-vm'

import {AppConstants} from '../common/app-constants'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class APIService {
    
    _url: string;
    public headers;
    
    constructor(public http: Http , public appConstants: AppConstants) {
       
          this.headers = appConstants.headers;
          this._url=appConstants.apiUrl;
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