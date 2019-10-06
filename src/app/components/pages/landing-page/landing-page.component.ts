import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LandingPageService } from './landing-page.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {

  constructor(private lp: LandingPageService) { }

  public src: string = "../../../../assets/imgs/landing_page/"
  @ViewChild('container') container: ElementRef;

  ngOnInit() {
  }

  public scroll() {
    this.lp.scroll(this.container) + "%";
  }
}
