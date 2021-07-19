// 38:30 import { Input }
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// 39:00 import { Task }
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  // 39:00 add task
  @Input() task: Task;
  // 1:05:30, add onDelete EventEmitter
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  // 1:04:15, add onDelete
  onDelete(task) {
    this.onDeleteTask.emit(task);
  }

  // 1:15:30, onToggle
  onToggle(task) {
    this.onToggleReminder.emit(task);
  }
}
