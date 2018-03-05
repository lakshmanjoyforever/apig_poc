import { Component } from '@angular/core';

@Component({
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent{

    getTitle(){
        return "POC";
    };
}
