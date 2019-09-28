import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'create-task',
  templateUrl: './create-task.component.html',
})
export class CreateTaskComponent implements OnInit {

  constructor() { }

  @Output() close = new EventEmitter<boolean>();

  ngOnInit() {
  }

  method() {
    this.close.emit();
  }

}
