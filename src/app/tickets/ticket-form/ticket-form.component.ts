import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Major, Ticket } from '../../../models/ticket';
import { Student } from 'src/models/student';
import { STUDENTS_MOCKED } from 'src/mocks/students.mock';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;
  public majors = Object.values(Major);
  public students: Student[] = STUDENTS_MOCKED;

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      studentID: 0,
      major: 0
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
  }

  addTicket() {
    const data = this.ticketForm.getRawValue()
    console.log(data)
    const title = data.title
    const desc = data.description
    const major = data.major
    const stdID = Number(data.studentID)
    
    const studentTemp: Student = this.students.find(student => student.id === stdID);
    const ticket: Ticket = {
      title: title,
      description: desc,
      date: new Date(),
      student: studentTemp,
      major: major,
      archived: false
    }

    this.ticketService.addTicket(ticket)
    this.ticketForm.reset()
  }
}
