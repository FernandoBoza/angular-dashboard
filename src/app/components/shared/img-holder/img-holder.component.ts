import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'img-holder',
  templateUrl: './img-holder.component.html',
})
export class ImgHolderComponent implements OnInit {

  constructor() { }

  @Input("src") src: string;

  ngOnInit() {
  }

}
