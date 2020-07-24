import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test:test123')});

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentiURL: string;

  constructor(private http: HttpClient) {
    this.studentiURL = 'http://localhost:8080/api/student/studenti';
  }

  public findAll(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentiURL, { headers });
  }

  public getStudentById(id: number): any{
    return this.http.get(this.studentiURL + '/' + id, { headers });
  }

  public save(student: Student){
    return this.http.post<Student>(this.studentiURL, student, { headers });
  }

  public updateStudent(id: number, student: Student){
    return this.http.put(this.studentiURL + '/' + id, student, { headers });
  }

  public deleteStudent(id: number){
    return this.http.delete(this.studentiURL + '/' + id, { headers });
  }
}
