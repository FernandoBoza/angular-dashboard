import { Component, OnInit } from '@angular/core';
import CONSTANTS from '../../services/Constants';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private user: UserServiceService) { }
  public notifications = CONSTANTS.notifications[0].notifArray;
  public departments = CONSTANTS.departments;
  public tasks_completed = CONSTANTS.tasks_completed;
  public tasks_pending = CONSTANTS.tasks_pending;


  public get users(): any[] {
    return this.user.mockUser;
  }

  ngOnInit() {
  }

}
