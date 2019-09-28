import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
})
export class InputTextComponent implements OnInit {

  constructor() { }

  @Input("class") class: string;
  @Input("label") label: string;
  @Input("model") model: any;
  @Input("type") type: any = "text";
  @Input("disabled") disabled: boolean = false;

  ngOnInit() {
  }

}
