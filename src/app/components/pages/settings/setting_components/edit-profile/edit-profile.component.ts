import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  public user: User = {
    id: "0123",
    name: "Jane Smith",
    email: "jsmith@email.com",
    password: "password",
    imageURL: "../../../../../../assets/imgs/user_imgs/pexels-photo-415829.jpeg",
    role: "ADMIN"
  }

  ngOnInit() {
  }

  public updateUser(e?: string, name?: string) {
    this.user[name] = e;
  }

  public updateProfile() {
    console.log(this.user);
  }

}
