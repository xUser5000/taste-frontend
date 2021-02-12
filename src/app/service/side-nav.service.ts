import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  private readonly _open: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public getObservable (): Observable<boolean> {
    return this._open.asObservable();
  }

  public getValue (): boolean {
    return this._open.getValue();
  }

  public setValue (value: boolean): void {
    this._open.next(value);
  }

  public toggle (): void {
    this._open.next(!this._open.getValue());
  }
}
