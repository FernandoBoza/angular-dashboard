import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public mockUser: any[] = [
    {
      name: "Jane Smith",
      department: "Development",
      // img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
      online: true
    },
    {
      name: "John Doe",
      department: "Development",
      // img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
      online: false
    },
    {
      name: "Jean Parker",
      department: "Development",
      // img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
      online: false
    },
    {
      name: "Maggie Lopez",
      department: "Development",
      // img: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
      online: false
    },
    {
      name: "Jane Smith",
      department: "Development",
      // img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
      online: true
    },
    {
      name: "John Doe",
      department: "Development",
      //  img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
      online: false
    },
    {
      name: "Jean Parker",
      department: "Development",
      //  img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
      online: false
    },
    {
      name: "Maggie Lopez",
      department: "Development",
      // img: "https://userstock.io/data/wp-content/uploads/2017/07/audrey-jackson-260657-1024x683.jpg",
      online: false
    },
  ]
  constructor() { }
}
