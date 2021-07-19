import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// 1:48:30 import Uiservice
import { UiService } from '../../services/ui.service';
// 1:49:00 add Subscription
import { Subscription } from 'rxjs';
// 1:32:20 {Task} from ../../Task
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})

// 1:26:19, add AddTaskComponent
export class AddTaskComponent implements OnInit {
  // 1:32:00 add eventEmitter task
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  // 1:49:00 add constructor
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
        // Unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

  // 1:29:00 add onSubmit, add validation
  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    // 1:30:00 add newTask
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // 1:32:30 add onAddTask.emit
    this.onAddTask.emit(newTask);

    // 1:31:00 clear form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
