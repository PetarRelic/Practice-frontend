import { Student } from './../../student';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Grad } from 'src/app/grad/grad';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  currentStudent: Student = null;
  gradovi: Grad[];

  myform: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.myform = new FormGroup({
      id: new FormControl(),
      ime: new FormControl(),
      prezime: new FormControl(),
      datumRodjenja: new FormControl(),
      grad: new FormControl()
    });
    this.route.params.subscribe((parametri) => {
      console.log(parametri.id);
      this.studentService.getStudentById(parametri.id).subscribe((res) => {
        this.currentStudent = res;
        this.myform.get('id').setValue(this.currentStudent.id);
        this.myform.get('ime').setValue(this.currentStudent.ime);
        this.myform.get('prezime').setValue(this.currentStudent.prezime);
        const dp = new DatePipe(navigator.language);
        const f = 'y-MM-dd';
        const datumRodjenja = dp.transform(this.currentStudent.datumRodjenja, f);
        this.myform.get('datumRodjenja').setValue(datumRodjenja);
        this.myform.get('grad').setValue(this.currentStudent.grad);
      });
    });
}

  onSubmit(){
    const id = this.myform.get('id').value;
    const ime = this.myform.get('ime').value;
    const prezime = this.myform.get('prezime').value;
    const datumRodjenja = this.myform.get('datumRodjenja').value;
    const grad = this.myform.get('grad').value;
    const student: Student = {
      id,
      ime,
      prezime,
      datumRodjenja,
      grad
    };
    this.studentService.updateStudent(id, student).subscribe(data => {
      console.log(data);
      this.goToStudentList();
    });
  }

  goToStudentList() {
    this.router.navigate(['/studenti']);
  }


}
