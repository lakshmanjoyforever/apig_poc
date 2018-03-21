import { Injectable } from '@angular/core';
import { Subject  } from 'rxjs/Subject';

@Injectable()
export class LoaderService {
    public status: Subject <boolean> = new Subject<boolean>();
    

    togglePageLoader(value: boolean) {
        this.status.next(value);
    }
}