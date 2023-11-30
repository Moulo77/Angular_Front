import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';
import { STUDENTS_MOCKED } from 'src/mocks/students.mock';
import { Student } from 'src/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:9428/api/students';

  private studentList: Student[] = STUDENTS_MOCKED;
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<any>(this.apiUrl).subscribe(
      (data) => {
        console.log('Fetched students:', data);
      },
      (error) => {
        console.error('Error fetching students', error);
      }
    );
  }
  

}