import { Component } from '@angular/core';
import {SelectItem} from 'primeng/api';

import { APIService } from '../../providers/api-service';
import { LoaderService } from '../../providers/loader-service';

import { APIDetails } from '../../models/apidetails-vm'


@Component({
    selector: 'apidetails-list',
    providers: [],
    templateUrl: './apiinfo.component.html'
})

export class APIInfoComponent {

    items = [];
    itemCount = 0;
    cols: any[];
    message:string;
    displayFilters:boolean=false;
    colors: any[];

    constructor(private _apiService: APIService, private _loaderService: LoaderService) {
    
        this.cols = [
            { field: 'APIName', header: 'API Name' },
            { field: 'JIRATicket', header: 'JIRA Ticket' },
            { field: 'APIType', header: 'API Type' },
            { field: 'CapabilityOwner', header: 'Capability Owner' },
            { field: 'CapabilityName', header: 'Capability Name' },
            { field: 'ResourceName', header: 'Resource Name' }
        ];

        this.colors = [
            { label: 'New', value: 'New' },
            { label: 'Existing', value: 'Existing' }
        
        ];

        this.getAPIDetails();
      
    }

    getAPIDetails() {
        this._loaderService.togglePageLoader(true);
        
              this._apiService.getAPIDetails('').subscribe(response => {
               
              
                let list =<APIDetails[]>response.DATA;
                console.log(list);
        
                this.items = list;
                this.itemCount = response.COUNT;
                 this.message="API Details saved successfully!!!";
                 this._loaderService.togglePageLoader(false);
        
            },(error)=>{
              
                console.log(error);
                this.message="Failed to save the API details";
                this._loaderService.togglePageLoader(false);
            });
   
    }

    showFilters()
    {
this.displayFilters=!this.displayFilters;
    }
  
}
