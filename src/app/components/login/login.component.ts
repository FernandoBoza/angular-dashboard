import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor() { }

  public toggle: String = "login";
  public terms_condition: boolean = false;
  public term_modal: boolean = false;

  ngOnInit() {
  }

  public toggleViews(n: string) {
    this.toggle = n;
  }

  public showTerms() {
    this.term_modal = !this.term_modal;
  }

}
