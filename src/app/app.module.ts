import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { DepartmentsComponent } from './components/pages/departments/departments.component';
import { NotificationsComponent } from './components/pages/notifications/notifications.component';
import { TasksComponent } from './components/pages/tasks/tasks.component';
import { CalendarComponent } from './components/pages/calendar/calendar.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CreateTaskComponent } from './components/shared/create-task/create-task.component';
import { TaskComponent } from './components/shared/task/task.component';
import { InputTextComponent } from './components/shared/input-text/input-text.component';
import { InputSearchComponent } from './components/shared/input-search/input-search.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { InboxComponent } from './components/pages/inbox/inbox.component';
import { SettingsComponent } from './components/pages/settings/settings.component';

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
    TaskComponent,
    InputTextComponent,
    InputSearchComponent
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
