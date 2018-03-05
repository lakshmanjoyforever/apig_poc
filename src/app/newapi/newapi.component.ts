import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { APIService } from '../../providers/api-service';
import { Router } from '@angular/router';

@Component({
    selector: 'newapi-app',
    templateUrl: 'newapi.component.html'
})

export class NewAPIComponent {
    newAPIFormGroup: FormGroup;
    _url: string;
    questionnaireURL: string;

    constructor(private _apiService: APIService, private router: Router) {
        this.newAPIFormGroup = new FormGroup({
            'JIRATicket': new FormControl('', Validators.required),
            'QuestionnaireURL': new FormControl('')
        });
        this.questionnaireURL = '';
        // Need to Change
        this._url = "http://localhost:4200/question?id=";
    }

    getEncryptedURL() {
        if (this.newAPIFormGroup.controls['JIRATicket'].valid) {

            this.questionnaireURL = this._url + "xqyywjjhWQ==";
          
          /*
            this._apiService.getQuestionnaireURL(this.newAPIFormGroup.value.JIRATicket).subscribe(response => {
                
                this.questionnaireURL = this._url + response;
            },(error)=>{
                alert('errpr');
            });

            */
        }
        this.newAPIFormGroup.controls['JIRATicket'].markAsTouched();
        //  this.router.navigate(['/question']);
    }
    //ascoril D
}