import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task';
import { TaskService } from '../services/task.server';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html'
})

export class TaskFormComponent implements OnInit {

  task = new Task(null, "", "", "", false, false, null);
  existed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
  ) {
   }

  ngOnInit() {
    this.route.params.subscribe(p => {
        if (p['id'] === undefined) return;
        this.taskService.getTask(p['id']).subscribe(h => this.task = h);
        this.existed = true;
      });
  }

  navigateToTasks() {
    this.router.navigate(['/tasks']);
  }

  onCancel() {
    this.navigateToTasks();
  }
  
  onSubmit(task: Task) {
    if(this.existed)
      this.taskService.updateTask(task).subscribe(c => this.router.navigate(['/tasks']));
    else
       this.taskService.addTask(task).subscribe(c => this.router.navigate(['/tasks']));
  }
}
