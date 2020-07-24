import { GradService } from './../../grad/grad.service';
import { StudentService } from './../student.service';
import { Student } from './../student';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grad } from 'src/app/grad/grad';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  student: Student;
  gradovi: Grad[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private gradService: GradService) {
      this.student = new Student();
      gradService.findAll().subscribe(data => {
        this.gradovi = data;
        console.log(data);
      });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.student);
    this.studentService.save(this.student).subscribe(result => {
      console.log(result);
      this.goToStudentList();
    });
  }

  goToStudentList() {
    this.router.navigate(['/studenti']);
  }

}
