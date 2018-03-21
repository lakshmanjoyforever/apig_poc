import { Component } from '@angular/core';
//import { DataTableResource } from '../data-table';
import persons from './data-table-demo1-data';

import { APIService } from '../../providers/api-service';
import { LoaderService } from '../../providers/loader-service';


@Component({
    selector: 'data-table-demo-1',
    providers: [],
    templateUrl: './apiinfo.component.html',
    styleUrls: ['./data-table-demo1.css']
})

export class APIInfoComponent {

   // itemResource = new DataTableResource(persons);
    items = [];
    itemCount = 0;
    message:string;

    constructor(private _apiService: APIService, private _loaderService: LoaderService) {
    
    }

    reloadItems(params) {
   
      this._loaderService.togglePageLoader(true);

      this._apiService.getAPIDetails(params).subscribe(response => {
         
        this.items = response.DATA;
        this.itemCount = response.COUNT;
         this.message="API Details saved successfully!!!";
         this._loaderService.togglePageLoader(false);
    },(error)=>{
      
        console.log(error);
        this.message="Failed to save the API details";
        this._loaderService.togglePageLoader(false);
    });
    }
  
}
