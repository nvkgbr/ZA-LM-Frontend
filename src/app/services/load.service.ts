import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  private _subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public get isLoadMaskVisibile(): Observable<boolean> {
    return this._subject.asObservable();
  }
  constructor() { }

  public show() {
    console.log("start");
    
      this._subject.next(true)
  }

  public hide() {
    console.log("hide");

    this._subject.next(false)
  }

}
