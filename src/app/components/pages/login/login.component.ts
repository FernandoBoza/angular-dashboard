import { Component, OnInit, HostListener } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor() { }

  public toggle: String = "login";
  public terms_condition: boolean = false;
  public term_modal: boolean = false;
  public passwordViewToggle: boolean = false;
  public user: User = new User();
  public err = {
    email: [],
    password: [],
    name: []
  }

  ngOnInit() {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.term_modal = false;
    }
  }

  public togglePasswordView() {
    this.passwordViewToggle = !this.passwordViewToggle;
  }

  public toggleViews(n: string) {
    this.toggle = n;
  }

  public showTerms(evt: Event) {
    evt.preventDefault();
    this.term_modal = !this.term_modal;
  }

  public loginUser() {
    if (this.validationUserLogin()) {
      console.log({ email: this.user.email, password: this.user.password });
    }
  }

  public createUser() {
    if (this.terms_condition && this.validationUserSignUp()) {
      console.log({ email: this.user.email, name: this.user.name, password: this.user.password });
    }
  }

  public validationUserSignUp() {
    this.flushErr()
    let email = this.user.email;
    let name = this.user.name;
    let password = this.user.password;

    if (email == "" || email == null || email == undefined) {
      this.err.email.push("Please enter an email")
    } else if (email.indexOf('@') == -1) {
      this.err.email.push("Not a valid email")
    }

    if (name == "" || name == null || name == undefined) {
      this.err.name.push("Please enter a name")
    }

    if (password == "" || password == null || password == undefined) {
      this.err.password.push("Please enter a password")
    } else if (password.length < 8) {
      this.err.password.push("Please enter a password 8 or more characters long")
    }

    if (this.err.email.length == 0 && this.err.name.length == 0 && this.err.password.length == 0) {
      return true
    } else {
      return false
    }
  }

  public validationUserLogin() {
    this.flushErr()
    let email = this.user.email;
    let password = this.user.password;

    if (email == "" || email == null || email == undefined) {
      this.err.email.push("Please enter an email")
    } else if (email.indexOf('@') == -1) {
      this.err.email.push("Not a valid email")
    }
    if (password == "" || password == null || password == undefined) {
      this.err.password.push("Please enter a password")
    } else if (password.length < 8) {
      this.err.password.push("Please enter a password 8 or more characters long")
    }

    if (this.err.email.length == 0 && this.err.password.length == 0) {
      return true
    } else {
      return false
    }
  }

  public flushErr() {
    this.err = {
      email: [],
      password: [],
      name: []
    }
  }

}
