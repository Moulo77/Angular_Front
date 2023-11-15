import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];
  public displayTicketArchived: boolean = true;

  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
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
