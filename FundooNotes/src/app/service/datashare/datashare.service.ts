import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  private info = new Subject<any>();
  public store = this.info.asObservable();
  
  constructor() { 

  }
  updateDataValue(trueOrFalse:any){
    this.info.next(trueOrFalse);
  }
}
