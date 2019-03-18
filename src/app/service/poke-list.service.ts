import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeListService {
  private hasNextSubject = new Subject();
  private hasPreviousSubject = new Subject();
  private isViewingPoke = new Subject();
  private viewingPokeParams = new Subject();
  
  getHasNext() {
    return this.hasNextSubject.asObservable();
  }

  updateHasNext(bool: boolean) {
    this.hasNextSubject.next(bool);
  }

  getHasPrevious() {
    return this.hasPreviousSubject.asObservable();
  }

  updateHasPrevious(bool: boolean) {
    this.hasPreviousSubject.next(bool);
  }

  getIsViewingPoke() {
    return this.isViewingPoke.asObservable();
  }

  setIsViewingPoke(bool: boolean) {
    this.isViewingPoke.next(bool);
  }

  getViewingPokeParams() {
    return this.viewingPokeParams.asObservable();
  }

  setViewingPokeParams(poke: object) {
    this.viewingPokeParams.next(poke);
  }

  constructor() { }
}
