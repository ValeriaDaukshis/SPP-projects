import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'app/main-page/main-page.component';
import {TaskListComponent} from './tasks-manager/lists/task-list.component';
import {TaskFormComponent} from './tasks-manager/forms/task-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'tasks', component: TaskListComponent},
  { path: 'task', component: TaskFormComponent },
  { path: 'task/:id', component: TaskFormComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
