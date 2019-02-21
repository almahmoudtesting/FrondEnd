import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../Authentication/authentication.service';
import {UserService} from '../user/user.service';
import {User} from '../user/user.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {TicketService} from '../ticket/ticket.service';
import {Ticket} from '../ticket/ticket.model';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  @Input() user: User;
  userid: number;
  private sub: Subscription;
  admin = false;
  user1 = false;
  organizer = false;
  tickets$: Ticket[];
  id: number;
  currentTicket: Ticket;

  constructor(private auth: AuthenticationService, private userService: UserService, private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.userService.getUser(this.auth.getUser()).subscribe(value => this.user = value);
    // console.log(this.auth.getUser());
    this.getRole();
    this.getMyTickets();
  }
  getRole() {
    if (this.auth.getRole().includes('ROLE_ADMIN')) {
      return this.admin = true;
    }
    if (this.auth.getRole().includes('ROLE_USER')) {
      return this.user1 = true;
    }
    if (this.auth.getRole().includes('ROLE_ORGANIZER')) {
      return this.organizer = true;
    }
  }
  getMyTickets() {
    this.ticketService.getMyTickets(this.auth.getUser()).subscribe( TicketData => {
        this.tickets$ = TicketData;
      },
      err => console.log(err),
      () => console.log('Getting All Tickets Booked ...')
    ); }
  getTicket(ticket) {
    this.currentTicket = ticket;
  }
}
