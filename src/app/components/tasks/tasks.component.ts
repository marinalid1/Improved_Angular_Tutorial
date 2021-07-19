import { Component, OnInit } from '@angular/core';
// 48:00 import { TaskService }
import { TaskService } from '../../services/task.service';
// 35:30 import { Task } from '../../Task' and import { TASKS } from '../../mock-tasks'
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  // 36:00 add tasks and set it equal to TASKS
  tasks: Task[] = [];

  // 48:00 add taskService to constructor to use it
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    //48:30 call this.taskService.getTasks()
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  // 1:08:00, add deleteTask
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  // 1:17:00, add toggleReminder, 1:19:30 add updateTaskReminder
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  // 1:33:30 add addTask
  // 1:36:00 push(task)
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
