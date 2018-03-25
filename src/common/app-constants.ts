import { Headers } from '@angular/http';
export class AppConstants {
    public headers;
    public apiUrl:string;
    public applicationUrl:string;

    constructor() {

        this.headers = new Headers({
            'Accept':'application/json',
             'Access-Control-Allow-Origin': '*',
               'Content-Type': 'application/json'
           });

           this.apiUrl= "http://localhost:8080/api/";
           this.applicationUrl = "http://localhost:4200/";

    }
}