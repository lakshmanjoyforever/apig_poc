import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'new-ticket-app',
    templateUrl: 'new-ticket.component.html'
})

export class NewTicketComponent{
    ticketStatus = [
        {value: '1', viewValue: 'TBD'},
        {value: '2', viewValue: 'ISO COMPLIANT'},
        {value: '3', viewValue: 'REFACTOR'},
        {value: '4', viewValue: 'APPROVED'},
        {value: '5', viewValue: 'Not Reviewed'},
        {value: '6', viewValue: 'Cancelled'},
        {value: '7', viewValue: 'ISO REQUIRED'}
      ];

      apiType = [
        {value: '1', Name: 'Report'},
        {value: '2', Name: 'Foundational'}
      ];
     
      clientSegments:any;
       newTicketForm:FormGroup;

       constructor()
       {
       this.clientSegments = [
            {value: '1', Name: 'Internal'},
            {value: '2', Name: 'Banks'},
            {value: '3', Name: 'Investment Managers'}
          ];
           this.newTicketForm=new FormGroup({
            'JIRATicket': new FormControl('', Validators.required)
           });
       }
}
