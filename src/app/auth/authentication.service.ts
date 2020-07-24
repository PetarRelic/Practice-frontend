import { UserService } from './user.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private userService: UserService) { }

  authenticate(username, password){
    return this.userService.findAll();
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    // console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
