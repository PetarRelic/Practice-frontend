import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test:test123')});

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl, { headers });
  }

  public getUserById(id: number): any{
    return this.http.get(this.usersUrl + '/' + id, { headers });
  }

  public updateUser(id: number, user: User){
    return this.http.put(this.usersUrl + '/' + id, user, { headers });
  }

}
