import { Component, OnInit } from '@angular/core';
import CONSTANTS from 'src/app/services/Constants';

@Component({
  selector: 'inbox',
  templateUrl: './inbox.component.html',
})
export class InboxComponent implements OnInit {

  constructor() { }

  public messages = CONSTANTS.messages;
  public chatHistory: any[];
  public selected: number = -1;

  ngOnInit() {
  }

  public selectMsg(message: any, index: number) {
    this.chatHistory = message.thread;
    this.selected = index;
  }

}
