import { Injectable } from '@angular/core';
// 57:00 add Http client, http headers
import { HttpClient, HttpHeaders } from '@angular/common/http';
// 49:30 import { Observable }
import { Observable } from 'rxjs';
import { Task } from '../Task';

// 1:19:00, httpOptions, pass in an object
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // 1:00:00 add apiUrl
  private apiUrl = 'http://localhost:5000/tasks';

  // 1:00:30, add private http:Client to constructor method
  constructor(private http: HttpClient) {}

  // 47:00 getTasks, return Tasks
  // 50:00 Observable,Task[]>
  getTasks(): Observable<Task[]> {
    // 1:01:00, get task
    return this.http.get<Task[]>(this.apiUrl);
  }

  // 1:08:30, deleteTask with Observable
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  // 1:18:00, update task reminder, return Observable
  // 1:35:00 post request
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
