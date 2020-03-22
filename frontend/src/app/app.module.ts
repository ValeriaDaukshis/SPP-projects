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
import {TaskFormComponent} from './tasks-manager/forms/task-form.component';
import {DetailTaskFormComponent} from './tasks-manager/forms/detailTask-form.component';
import { LoginComponent } from './login-manager/forms/login.component';
import { AuthenticationService } from './login-manager/services/authentication.service';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TaskListComponent,
    TaskFormComponent,
    DetailTaskFormComponent,
    LoginComponent
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
    AuthenticationService,
    ErrorInterceptor,
    JwtInterceptor

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
