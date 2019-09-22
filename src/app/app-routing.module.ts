import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SettingsComponent } from './components/settings/settings.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  { path: "", component: AdminComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "departments", component: DepartmentsComponent },
  { path: "tasks", component: TasksComponent },
  { path: "inbox", component: InboxComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "calendar", component: AdminComponent },
  { path: "settings", component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
