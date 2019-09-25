import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor() { }

  public toggle: String = "login";

  ngOnInit() {
  }

  public toggleViews(n: string) {
    this.toggle = n;
  }

}
