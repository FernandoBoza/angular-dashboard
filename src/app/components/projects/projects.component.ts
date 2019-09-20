import { Component, OnInit } from '@angular/core';
import CONSTANTS from 'src/app/services/Constants';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  public projects = CONSTANTS.projects;
  public projectLayout: any[];
  public selected: number = -1;

  ngOnInit() {
  }

  public selectProject(project: any, index: number) {
    this.projectLayout = project;
    this.selected = index;
    console.log(project);
  }

  public getProjectRatio(tasks: any) {
    let x = 0
    for (const task of tasks) {
      if (task.status == "complete") {
        x++;
      }
    }

    return (`Task Completed ${x}/${tasks.length}`);
  }

}
