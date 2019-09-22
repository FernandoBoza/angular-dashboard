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


  ngOnInit() {
    this.selectTaskCategory = this.tasks_pending;
  }

  public select_task_category(n: number) {
    this.col_toggle = false;

    switch (n) {
      case 1:
        let arr = this.tasks_pending.concat(this.tasks_completed);
        this.selectTaskCategory = arr;
        console.log(this.selectTaskCategory);
        break;
      case 2:
        this.selectTaskCategory = this.tasks_pending
        break;
      case 4:
        this.selectTaskCategory = this.tasks_completed
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
}
