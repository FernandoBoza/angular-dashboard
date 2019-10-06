import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  @ViewChild('container') container: ElementRef;
  public barWidth: string = "0";
  public src: string = "../../../../assets/imgs/landing_page/"

  ngOnInit() {
  }

  scroll() {
    let {
      scrollTop,
      scrollHeight,
      clientHeight
    } = this.container.nativeElement;

    let height = scrollHeight - clientHeight;
    var scrolled = (scrollTop / height) * 100;
    this.barWidth = scrolled + "%";
    console.log(this.barWidth);
  }

}
