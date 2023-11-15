import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';
import { STUDENTS_MOCKED } from 'src/mocks/students.mock';
import { Student } from 'src/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentList: Student[] = STUDENTS_MOCKED;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

  constructor() {
  }
}