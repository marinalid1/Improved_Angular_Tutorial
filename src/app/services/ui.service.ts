import { Injectable } from '@angular/core';
// 1:39:00 import {Observable, Subject} from rxjs
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

// 1:40:00 add showAddTask, set boolean to false, add subject = new Subject<any>
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  // 1:40:00 toggleAddTask for showAddTask
  toggleAddTask(): void {
    // 1:40:30 set this.showAddTask to opposite
    this.showAddTask = !this.showAddTask;
    // 1:40:30 pass in this.showAddTask
    this.subject.next(this.showAddTask);
  }

  // 1:41:00 return Observable
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
