import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  public notif_card: boolean = false;
  public notif_info: any = {
    title: "This is fake data",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing."
  }

  public show_notif() {
    this.notif_card = true;
    setTimeout(() => {
      this.notif_card = false;
    }, 5000);
  }

  public mockUser: any[] = [
    {
      name: "Lizzie Parker",
      department: "Development",
      img: "https://randomuser.me/api/portraits/women/6.jpg",
      online: true
    },
    {
      name: "John Doe",
      department: "Development",
      img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
      online: false
    },
    {
      name: "Jean Parker",
      department: "Development",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      online: false
    },
    {
      name: "Maggie Lopez",
      department: "Development",
      img: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
      online: false
    },
    {
      name: "Jane Smith",
      department: "Development",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
      online: true
    },
    {
      name: "John Doe",
      department: "Development",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      online: false
    },
    {
      name: "Jean Parker",
      department: "Development",
      img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
      online: false
    },
    {
      name: "Maggie Lopez",
      department: "Development",
      img: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
      online: false
    },
  ]

  constructor() { }
}
