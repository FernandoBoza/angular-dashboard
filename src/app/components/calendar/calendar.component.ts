import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import CONSTANTS from 'src/app/services/Constants';


@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {

  constructor() { }
  public col_toggle: boolean = false;
  public currentMonth = moment().format("MMMM")
  public month: any = [];
  public tasks = CONSTANTS.tasks_pending;
  public daysLabel = [
    {
      long: "Monday",
      short: "mon",
    },
    {
      long: "Tuesday",
      short: "tue",
    },
    {
      long: "Wednesday",
      short: "wed",
    },
    {
      long: "Thursday",
      short: "thu",
    },
    {
      long: "Friday",
      short: "fri",
    },
    {
      long: "Saturday",
      short: "sat",
    },
    {
      long: "Sunday",
      short: "sun",
    },
  ]

  ngOnInit() {
    this.getDaysArray(moment().format('Y MM'));
    this.addTasksToMonthObj();
  }

  public changeMonth(dir) {
    if (dir == "left") {
      this.currentMonth = moment(`${this.currentMonth} 01 ${moment().format("YYYY")}`).subtract(1, 'months').format("MMMM")
    } else {
      this.currentMonth = moment(`${this.currentMonth} 01 ${moment().format("YYYY")}`).add(1, 'months').format("MMMM")
    }
  }

  public addTasksToMonthObj() {
    let x = []
    this.tasks.forEach(task => {
      let taskDate = moment(task.dateLog).format("MM/DD/YYYY")
      this.month.forEach(day => {
        if (day.fullDate == taskDate) {
          x.push(task)
          day.tasks = x
        }
      });
    });
  }

  public expandCalendar(tasks) {
    console.log(tasks);
    this.col_toggle = !this.col_toggle
  }

  public selectDay(day) {
    console.log(day);
  }

  public getDaysArray(dateString) {
    let year = dateString.split(' ').slice(0, -1).join(' ')
    let month = dateString.split(' ').slice(-1).join(' ')
    const date = new Date(year, month - 1, 1);
    const names = Object.freeze(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']);
    const result = []
    while (date.getMonth() == month - 1) {
      result.push({
        day: `${date.getDate()}`,
        label: `${names[date.getDay()]}`,
        fullDate: `${moment(date).format("MM/DD/YYYY")}`
      });
      date.setDate(date.getDate() + 1);
    }
    this.month = result;
  }
}