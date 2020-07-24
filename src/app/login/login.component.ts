import { AuthenticationService } from './../auth/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '';
  invalidLogin = false;
  users;

  constructor(private router: Router, private loginService: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    this.loginService.authenticate(this.username, this.password).subscribe(result => {
      this.users = result;
      // const salt = bcrypt.genSaltSync(12);
      // const hashedpass = bcrypt.hashSync(this.password, 12);
      this.users.forEach(user => {
        // // hashedpass === user.password;
        // // bcrypt.compare(hashedpass, this.password)
        // // this.password === user.password
        // console.log(hashedpass);
        // const str = user.password.substring(8);
        // console.log(str);
        if (this.username === user.username && this.password === user.password) {
          sessionStorage.setItem('username', this.username);
          this.router.navigate(['']);
          this.invalidLogin = false;
        } else {
          alert('WRONG CREDENTIALS!');
          this.invalidLogin = true;
        }
      });
    });
    // if (this.loginService.authenticate(this.username, this.password)) {
    //   this.router.navigate(['']);
    //   this.invalidLogin = false;
    // } else {
    //   alert('WRONG PASSWORD!');
    //   this.invalidLogin = true;
    // }
  }

}
