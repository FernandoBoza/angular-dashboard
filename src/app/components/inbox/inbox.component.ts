import { Component, OnInit } from '@angular/core';
import Constants from "../../services/Constants"

@Component({
  selector: 'inbox',
  templateUrl: './inbox.component.html',
})
export class InboxComponent implements OnInit {

  constructor() { }

  public messages = Constants.messages;
  public chatHistory: any[];
  public selected: number = -1;

  ngOnInit() {
  }

  public selectMsg(message: any, index: number) {
    this.chatHistory = message.thread;
    this.selected = index;
  }

}
