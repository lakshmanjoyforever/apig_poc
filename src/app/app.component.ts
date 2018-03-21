import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import { LoaderService } from '../providers/loader-service';

@Component({
  //changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  displayLoader:boolean=false;
  
  constructor(private _loaderService: LoaderService) {
  }

  ngOnInit() {
    this._loaderService.status.subscribe((val: boolean) => {
     // alert(val);
       // this.showLoader = val;
       this.displayLoader=val;
      
        console.log( val);

    });
}
    
}
