import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { APIService } from '../../providers/api-service';
import { LoaderService } from '../../providers/loader-service';

import { IQuestionnaireVM } from '../../models/questionnaire-vm'
import { IAPIMainVM } from '../../models/apimain-vm'

@Component({
    selector: 'questionnaire-app',
    templateUrl: 'questionnaire.component.html'
})

export class QuestionnaireComponent implements OnInit {

    apiMainId:number=0;
    questionnaireFormGroup: FormGroup;
    jiraTicket: string;
    questionnaireVM: IQuestionnaireVM;
    apiMainVM:IAPIMainVM;
    isDataAvailable:boolean=false

    constructor(private _apiService: APIService,
        private _loaderService: LoaderService,
        private route: ActivatedRoute,
        private router: Router) {
         this.questionnaireVM= new IQuestionnaireVM();
    }

    setFormGroup() {
      
        this.questionnaireFormGroup = new FormGroup({
            'Name': new FormControl('', Validators.required),
            'jiraTicket': new FormControl({value: this.apiMainVM.JIRATicket, disabled: true}, Validators.required),
            'apiName': new FormControl({value: this.apiMainVM.APIName, disabled: true}, Validators.required),
            'apiType': new FormControl(this.apiMainVM.APIType, Validators.required),
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
                console.log('ngOnInit');
                this.decryptValue(params['id']);
            }
        })
    }

    decryptValue(encryptText: string) {
        
        this._loaderService.togglePageLoader(true);

        this._apiService.getDecryptValue(encryptText).subscribe(response => {
         console.log(response);
         console.log('Assiged Object');
            this.apiMainVM = response;
            console.log(this.apiMainVM);
            this.apiMainId=response.ApiMainId;
            alert(this.apiMainId);
            this.questionnaireVM.APIMainId=this.apiMainVM.ApiMainId;
            this.jiraTicket=this.apiMainVM.JIRATicket;
            this.isDataAvailable=true;
            this.setFormGroup();

            this._loaderService.togglePageLoader(false);

        }, (error) => {
            // Error
            alert('Error !!!!');
            this._loaderService.togglePageLoader(false);
        });
    }

    saveDetails() {
       alert(this.apiMainId);
        this.questionnaireFormGroup.controls['Name'].markAsTouched();
        this.questionnaireFormGroup.controls['apiType'].markAsTouched();
        this.questionnaireFormGroup.controls['sdlcStage'].markAsTouched();
        this.questionnaireFormGroup.controls['businessAnalyst'].markAsTouched();
        this.questionnaireFormGroup.controls['businessCapacity'].markAsTouched();
        this.questionnaireFormGroup.controls['valueProposition'].markAsTouched();
        this.questionnaireFormGroup.controls['clientSegments'].markAsTouched();
        this.questionnaireFormGroup.controls['revenueModel'].markAsTouched();
        this.questionnaireFormGroup.controls['revenueGeneration'].markAsTouched();

        this.questionnaireVM.APIMainId=this.apiMainId;
        this.questionnaireVM.CreatedBy = this.questionnaireFormGroup.value.Name;
        this.questionnaireVM.BusinessCapabilities = this.questionnaireFormGroup.value.businessCapacity;
        this.questionnaireVM.ValueProposition = this.questionnaireFormGroup.value.valueProposition;
        this.questionnaireVM.ClientSegments = this.questionnaireFormGroup.value.clientSegments;
        this.questionnaireVM.RevenueModel = this.questionnaireFormGroup.value.revenueModel;
        this.questionnaireVM.RevenueGeneration = this.questionnaireFormGroup.value.revenueGeneration;

console.log(  this.questionnaireVM);

        this._apiService.saveQuestionnaire(this.questionnaireVM).subscribe(response => {
            alert(response);
        }, (error) => {
            // Error
        });
    }

}