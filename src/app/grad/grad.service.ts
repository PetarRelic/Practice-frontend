import { Grad } from './grad';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test:test123')});


@Injectable({
  providedIn: 'root'
})
export class GradService {

  private gradoviURL: string;

  constructor(private http: HttpClient) {
    this.gradoviURL = 'http://localhost:8080/api/grad/gradovi';
  }

  public findAll(): Observable<Grad[]>{
    return this.http.get<Grad[]>(this.gradoviURL, { headers });
  }

  public save(grad: Grad){
    return this.http.post<Grad>(this.gradoviURL, grad,  { headers });
  }

  public deleteGrad(id: number){
    return this.http.delete(this.gradoviURL + '/' + id,  { headers });
  }
}
