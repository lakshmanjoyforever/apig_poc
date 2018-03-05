import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../providers/api-service';
import { IQuestionnaireVM } from '../../models/questionnaire-vm'

@Component({
    selector: 'questionnaire-app',
    templateUrl: 'questionnaire.component.html'
})

export class QuestionnaireComponent implements OnInit {

    questionnaireFormGroup: FormGroup;
    jiraTicket: string;
    questionnaireVM: IQuestionnaireVM;

    constructor(private _apiService: APIService,
        private route: ActivatedRoute,
        private router: Router) {

        this.setFormGroup();
        this.questionnaireVM={ Name:'', JIRATicket:'',BusinessAnalyst:'',APIType:'',SDLCStage:''} ;
    }

    setFormGroup() {
        this.questionnaireFormGroup = new FormGroup({
            'Name': new FormControl('', Validators.required),
            'jiraTicket': new FormControl({value: 'Nancy', disabled: true}, Validators.required),
            'apiType': new FormControl('', Validators.required),
            'sdlcStage': new FormControl('', Validators.required),
            'businessAnalyst': new FormControl('', Validators.required),
            'businessCapacity': new FormControl('', Validators.required),
            'valueProposition': new FormControl('', Validators.required),
            'clientSegments': new FormControl('', Validators.required),
            'revenueModel': new FormControl('', Validators.required),
            'revenueGeneration': new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            console.log(params['id']);
            if (params['id'] == undefined || params['id'] == "") {
                this.router.navigate(['/pagenotfound']);
            }
            else {
                this.decryptValue(params['id']);
            }
        })
    }

    decryptValue(encryptText: string) {
        this.jiraTicket ="12345";
      /*
        this._apiService.getDecryptValue(encryptText).subscribe(response => {
            this.jiraTicket = response;
        }, (error) => {
            // Error
        });
        */
    }

    saveDetails() {
        console.log('ddddd');
        this.questionnaireFormGroup.controls['Name'].markAsTouched();
        this.questionnaireFormGroup.controls['apiType'].markAsTouched();
        this.questionnaireFormGroup.controls['sdlcStage'].markAsTouched();
        this.questionnaireFormGroup.controls['businessAnalyst'].markAsTouched();
        this.questionnaireFormGroup.controls['businessCapacity'].markAsTouched();
        this.questionnaireFormGroup.controls['valueProposition'].markAsTouched();
        this.questionnaireFormGroup.controls['clientSegments'].markAsTouched();
        this.questionnaireFormGroup.controls['revenueModel'].markAsTouched();
        this.questionnaireFormGroup.controls['revenueGeneration'].markAsTouched();
alert(this.questionnaireFormGroup.value.Name);
     //   this.questionnaireVM.JIRATicket = this.questionnaireFormGroup.value.JIRATicket;
        this.questionnaireVM.Name = this.questionnaireFormGroup.value.Name;
        this.questionnaireVM.BusinessAnalyst = this.questionnaireFormGroup.value.BusinessAnalyst;
console.log(  this.questionnaireVM);
let aa={
    Name:"aaaaaa"
};

        this._apiService.saveQuestionnaire(this.questionnaireVM).subscribe(response => {
            alert(response);
        }, (error) => {
            // Error
        });
    }

}