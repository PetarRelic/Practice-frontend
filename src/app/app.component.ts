import { AuthenticationService } from './auth/authentication.service';
import { Subscription } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(public loginService: AuthenticationService){
    this.title = 'Aplikacija za vezbu';
  }

}
