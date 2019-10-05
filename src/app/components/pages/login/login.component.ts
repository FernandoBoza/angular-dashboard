import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private us: UserServiceService,
    private router: Router
  ) { }

  public toggle: String = "login";
  public terms_condition: boolean = false;
  public term_modal: boolean = false;
  public passwordViewToggle: boolean = false;
  public confirmedPassword: string;
  public isLoadingResults: boolean = false;

  public loginForm: FormGroup;
  public user: User = new User();

  public email: string;
  public password: string;

  public err = {
    email: [],
    password: [],
    name: []
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.term_modal = false;
    }
  }

  login(form: NgForm) {
    console.log(form);
    // this.us.login(form)
    //   .subscribe(res => {
    //     console.log(res);
    //     if (res.token) {
    //       localStorage.setItem('token', res.token);
    //       this.router.navigate(['dashboard']);
    //     }
    //   }, (err) => {
    //     console.log(err);
    //   });
  }

  register() {
    this.router.navigate(['register']);
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
    } else if (!this.validateEmail(email)) {
      this.err.email.push("Not a valid email")
    }

    if (name == "" || name == null || name == undefined) {
      this.err.name.push("Please enter a name")
    }

    if (password == "" || password == null || password == undefined) {
      this.err.password.push("Please enter a password")
    } else if (password.length < 8) {
      this.err.password.push("Please enter a password 8 or more characters long")
    } else if (password != this.confirmedPassword) {
      this.err.password.push("Password doesn't match")
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
    } else if (!this.validateEmail(email)) {
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

  public validateEmail(email: String) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  public flushErr() {
    this.err = {
      email: [],
      password: [],
      name: []
    }
  }

  public togglePasswordView() {
    this.passwordViewToggle = !this.passwordViewToggle;
  }

  public toggleViews(n: string) {
    if (n == 'register') {
      this.location.replaceState('/register');
    } else {
      this.location.replaceState('/login');
    }
    this.user = new User();
    this.toggle = n;
    this.err = {
      email: [],
      password: [],
      name: []
    }
  }

  public showTerms(evt: Event) {
    evt.preventDefault();
    this.term_modal = !this.term_modal;
  }

}
