import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @ViewChild('archivebtn') archivebtn: ElementRef;

  @Input()
  ticket: Ticket;

  @Output()
  ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  ticketHasBeenDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    this.hideButton();
  }

  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }

  deleteTicket() {
    this.ticketHasBeenDeleted.emit(true);
    this.hideButton();
  }

  hideButton() {
    if(this.ticket.archived){
      const btnElement = this.archivebtn.nativeElement;
      btnElement.style.display = 'none';
    }
  }
}
