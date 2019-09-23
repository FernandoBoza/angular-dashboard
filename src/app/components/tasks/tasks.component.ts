import { Component, OnInit } from '@angular/core';
import CONSTANTS from 'src/app/services/Constants';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {

  constructor() { }
  public tasks_completed = CONSTANTS.tasks_completed;
  public tasks_pending = CONSTANTS.tasks_pending;
  public col_toggle: boolean = false;
  public selectedTask: any;
  public selectTaskCategory;
  public selected: number = 2;


  ngOnInit() {
    this.selectTaskCategory = this.tasks_pending;
  }

  public select_task_category(n: number) {
    this.col_toggle = false;

    switch (n) {
      case 1:
        let arr = this.tasks_pending.concat(this.tasks_completed);
        this.selectTaskCategory = arr;
        this.selected = 1;
        break;
      case 2:
        this.selectTaskCategory = this.tasks_pending
        this.selected = 2;
        break;
      case 3:
        this.selectTaskCategory = this.tasks_pending
        this.selected = 3;
        break;
      case 4:
        this.selectTaskCategory = this.tasks_completed
        this.selected = 4;
        break;

      default:
        break;
    }
  }

  public expandTask(task?: any) {
    this.selectedTask = task;
    if (task != undefined) {
      this.col_toggle = true;
    } else {
      this.col_toggle = !this.col_toggle
    }
  }

  public getStatus(status: string) {
    switch (status) {
      case "in_progress":
        return "In Progress"
        break;
      case "complete":
        return "Complete"
        break;

      default:
        break;
    }
  }
}
