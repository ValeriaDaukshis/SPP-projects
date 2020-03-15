import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { MainPageComponent } from 'app/main-page/main-page.component';
import { TaskService } from './tasks-manager/services/task.server';
import {TaskListComponent} from './tasks-manager/lists/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    // Angular providers
    HttpClient,
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
