import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  private info = new Subject<any>();
  public store = this.info.asObservable();

  private searchInfo = new Subject<any>();
  public searchStore = this.searchInfo.asObservable();
  
  constructor() { 

  }
  updateDataValue(val:any){
    this.info.next(val);
  }
  updateSearch(val:any){
    this.searchInfo.next(val);
  }
}
