import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  public isLoggedIn: boolean = false;
  public redirectUrl: string;
  private api = 'http://localhost:8080/login';


  public notif_card: boolean = false;
  public notif_info: any = {
    title: "This is fake data",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing."
  }

  constructor(private http: HttpClient) { }

  public login(data: any): Observable<any> {
    return this.http.post<any>(this.api, data)
      .pipe(
        tap(_ => this.isLoggedIn = true),
        catchError(this.handleError('login', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
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
  public user: User = {
    id: "0123",
    name: "Jane Smith",
    email: "jsmith@email.com",
    password: "password",
    imageURL: "../../../../../../assets/imgs/user_imgs/pexels-photo-415829.jpeg",
    role: "ADMIN"
  }
}
