import { Router } from '@angular/router';
import { StudentService } from './../student.service';
import { Student } from './../student';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studenti: Student[];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.studentService.findAll().subscribe(data => {
      this.studenti = data;
    });

  }

  onEditStudent(id: number){
    this.router.navigate(['/studenti/', id]);
  }

  onDelete(id: number){
    if (confirm('Da li ste sigurni da zelite da obrisete?')){
      this.studentService.deleteStudent(id).subscribe(data => {
        console.log(data);
      });
    }
  }

}
