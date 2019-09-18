import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: "", component: AdminComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "departments", component: AdminComponent },
  { path: "tasks", component: AdminComponent },
  { path: "inbox", component: AdminComponent },
  { path: "notifications", component: AdminComponent },
  { path: "calendar", component: AdminComponent },
  { path: "settings", component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
