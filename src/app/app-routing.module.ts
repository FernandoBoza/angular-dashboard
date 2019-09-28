import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { DepartmentsComponent } from './components/pages/departments/departments.component';
import { NotificationsComponent } from './components/pages/notifications/notifications.component';
import { TasksComponent } from './components/pages/tasks/tasks.component';
import { CalendarComponent } from './components/pages/calendar/calendar.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { InboxComponent } from './components/pages/inbox/inbox.component';
import { SettingsComponent } from './components/pages/settings/settings.component';

const routes: Routes = [
  { path: "", component: AdminComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "departments", component: DepartmentsComponent },
  { path: "tasks", component: TasksComponent },
  { path: "inbox", component: InboxComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "settings", component: SettingsComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
