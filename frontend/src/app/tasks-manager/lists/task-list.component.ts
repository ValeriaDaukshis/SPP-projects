import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.server';

@Component({
  selector: 'app-customer-item',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService.getTasks().subscribe(h => this.tasks = h);
  }

  onFinish(id){
    let task = this.tasks.find(f=> f._id == id);
    this.taskService.setTaskStatus(task, true).subscribe(c => task.isMade = true);
  }

  onUnfinish(id){
    let task = this.tasks.find(f=> f._id == id);
    this.taskService.setTaskStatus(task, false).subscribe(c => task.isMade = false);
  }

  
}
