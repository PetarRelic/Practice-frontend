import { GradService } from './../grad.service';
import { Grad } from './../grad';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradovi-list',
  templateUrl: './gradovi-list.component.html',
  styleUrls: ['./gradovi-list.component.css']
})
export class GradoviListComponent implements OnInit {

  gradovi: Grad[];

  constructor(private gradService: GradService) { }

  ngOnInit(){
    this.gradService.findAll().subscribe(data => {
      this.gradovi = data;
    });
  }

  onDelete(id: number){
    if (confirm('Da li ste sigurni da zelite da obrisete?')){
      this.gradService.deleteGrad(id).subscribe(data => {
        console.log(data);
      });
    }
  }

}
