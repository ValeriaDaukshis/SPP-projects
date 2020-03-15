import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, onErrorResumeNext } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = environment.apiUrl + 'tasks/';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.url);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.url}${id}`);
  }

  addTask(task: Task) : Observable<Task> {
    return this.http.post<Task>(`${this.url}`, task);
  }

  updateTask(task: Task): Observable<Task>{
    return this.http.put<Task>(`${this.url}${task.id}`, task);
  }

  setTaskStatus(id: number, status: boolean): Observable<Object> {
    return this.http.put<Object>(`${this.url}${id}/status/${status}`, null);
  }
}
