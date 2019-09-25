import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import CONSTANTS from './services/Constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private user: UserServiceService) { }

  public expanded: boolean = false;
  public menu = CONSTANTS.menu;
  public hide: boolean;

  ngOnInit() {
    this.hide = location.href.includes("login")
  }


  public get users(): any[] {
    return this.user.mockUser
  }

  public expandChat() {
    this.expanded = !this.expanded
  }

}
