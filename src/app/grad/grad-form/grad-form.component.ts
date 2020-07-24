import { GradService } from './../grad.service';
import { Grad } from './../grad';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grad-form',
  templateUrl: './grad-form.component.html',
  styleUrls: ['./grad-form.component.css']
})
export class GradFormComponent implements OnInit {

  grad: Grad;

  constructor(private route: ActivatedRoute, private router: Router, private gradService: GradService) {
    this.grad = new Grad();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.gradService.save(this.grad).subscribe(result => this.goToGradoviList());
  }

  goToGradoviList() {
    this.router.navigate(['/gradovi']);
  }


}
