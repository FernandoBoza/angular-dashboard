import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SettingsComponent } from './components/settings/settings.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { LoginComponent } from './components/login/login.component';
import { CreateTaskComponent } from './components/shared/create-task/create-task.component';
import { TaskComponent } from './components/shared/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProjectsComponent,
    SettingsComponent,
    InboxComponent,
    DepartmentsComponent,
    NotificationsComponent,
    TasksComponent,
    CalendarComponent,
    LoginComponent,
    CreateTaskComponent,
    TaskComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
