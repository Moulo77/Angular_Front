import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import { StudentService } from 'src/services/student/student.service';
import { STUDENTS_MOCKED } from 'src/mocks/students.mock';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];
  public studentList: Student[] = [];
  public displayTicketArchived: boolean = true;

  constructor(public ticketService: TicketService, private studentService: StudentService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
    this.studentService.getStudents()
  }

  ngOnInit() {
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('Selected:', hasBeenSelected);
  }

  ticketHasBeenDeleted(hasBeenDeleted: boolean,ticket: Ticket){
    console.log('Deleted:', hasBeenDeleted);
    this.ticketService.deleteTicket(ticket)
  }

  toggleDisplayTicketArchived() {
    this.displayTicketArchived = !this.displayTicketArchived;
  }

  get filteredTicketList(): Ticket[] {
    return this.displayTicketArchived ?
      this.ticketList :
      this.ticketList.filter(ticket => !ticket.archived);
  }
}
