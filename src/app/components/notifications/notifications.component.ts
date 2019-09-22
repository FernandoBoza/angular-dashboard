import { Component, OnInit } from '@angular/core';
import CONSTANTS from 'src/app/services/Constants';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',

})
export class NotificationsComponent implements OnInit {

  constructor() { }
  public notifications = CONSTANTS.notifications;

  ngOnInit() {
    console.log(this.notifications);
  }

}
