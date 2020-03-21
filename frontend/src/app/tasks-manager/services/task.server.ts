import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, onErrorResumeNext } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
});
  private url = environment.apiUrl + 'tasks/';
  private singleUrl = environment.apiUrl + 'task/';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.url);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.url}${id}`);
  }

  addTask(task: Task) : Observable<Task> {
    let form = this.init(task);
    return this.http.post<Task>(`${this.singleUrl}`, form.toString(), {headers: this.headers});
  }

  updateTask(task: Task): Observable<Task>{
    let form = this.init(task);
    return this.http.put<Task>(`${this.singleUrl}${task._id}`, form.toString(), {headers: this.headers});
  }

  setTaskStatus(task: Task, status: boolean): Observable<Object> {
    let form = this.init(task);
    return this.http.put<Object>(`${this.singleUrl}${task._id}/status/${status}`, form.toString(), {headers: this.headers});
  }

  init(task: Task) {
    let form = new HttpParams()
     .set(`_id`, task._id === null ? null : task._id.toString()) 
     .set(`deadline`, task.deadline)
     .set(`details`, task.details)
     .set(`isMade`, task._id === null ? "false" : task.isMade.toString())
     .set(`name`, task.name);

     return form;
  }
}
