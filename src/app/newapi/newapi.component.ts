import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { APIService } from '../../providers/api-service';
import { LoaderService } from '../../providers/loader-service';

import { Router } from '@angular/router';

@Component({
    selector: 'newapi-app',
    templateUrl: 'newapi.component.html'
})

export class NewAPIComponent {
    newAPIFormGroup: FormGroup;
    _url: string;
    questionnaireURL: string;
    isSuccess:boolean;
    message:string;

    constructor(private _apiService: APIService,private _loaderService: LoaderService, private router: Router) {
        this.newAPIFormGroup = new FormGroup({
            'APIName': new FormControl('', Validators.required),
            'APIType': new FormControl('', Validators.required),
            'JIRATicket': new FormControl('', Validators.required),
            'QuestionnaireURL': new FormControl('')
        });
        this.questionnaireURL = '';
        this.message='';
        // Need to Change
        this._url = "http://localhost:4200/question?id=";
        this.isSuccess=false;
    }

    getEncryptedURL() {
        this.isSuccess=false;
        if (this.newAPIFormGroup.controls['JIRATicket'].valid) {
            this._loaderService.togglePageLoader(true);
            this._apiService.getQuestionnaireURL(this.newAPIFormGroup.value.APIName,this.newAPIFormGroup.value.APIType,this.newAPIFormGroup.value.JIRATicket).subscribe(response => {
                this.questionnaireURL = this._url + response.EncryptedId;
                 this.isSuccess=true;
                 this.message="API Details saved successfully!!!";
                 this._loaderService.togglePageLoader(false);
            },(error)=>{
               // alert('errpr');
                console.log(error);
                this.message="Failed to save the API details";
                this._loaderService.togglePageLoader(false);
            });
        }
        this.newAPIFormGroup.controls['APIName'].markAsTouched();
        this.newAPIFormGroup.controls['APIType'].markAsTouched();
        this.newAPIFormGroup.controls['JIRATicket'].markAsTouched();
        //  this.router.navigate(['/question']);
    }
    //ascoril D
}