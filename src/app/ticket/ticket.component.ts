import { Component, OnInit } from '@angular/core';
import {Ticket} from './ticket.model';
import {TicketService} from './ticket.service';
import {AuthenticationService} from '../Authentication/authentication.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets$: Ticket[];
  currentTicket: Ticket;
  admin = false;
  user = false;
  organizer = false;
  constructor(private ticketService: TicketService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.getRole();
    this.getTickets();
  }
  getTickets() {
    this.ticketService.getTickets().subscribe( TicketData => {
        this.tickets$ = TicketData;
      },
      err => console.log(err),
      () => console.log('Getting Events ...')
    ); }
    getTicket(ticket) {
    this.currentTicket = ticket;
    }
  getRole() {
    if (this.auth.getRole().includes('ROLE_ADMIN')) {
      return this.admin = true;
    }
    if (this.auth.getRole().includes('ROLE_USER')) {
      return this.user = true;
    }
    if (this.auth.getRole().includes('ROLE_ORGANIZER')) {
      return this.organizer = true;
    }
  }
}
