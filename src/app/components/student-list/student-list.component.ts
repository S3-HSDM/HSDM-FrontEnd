import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent implements OnInit {

  cards$: Observable<Card[]> = new Observable;


  constructor(private studentsService: StudentsService) {
  }

  ngOnInit(): void {
    this.cards$ = this.studentsService.getCards();
  }

}
