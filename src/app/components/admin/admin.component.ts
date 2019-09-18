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
  public notifications = CONSTANTS.notifications;
  public departments = CONSTANTS.departments;


  public get users(): any[] {
    return this.user.mockUser;
  }


  ngOnInit() {
  }

}
