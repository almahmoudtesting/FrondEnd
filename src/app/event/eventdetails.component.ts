import {Component, Input, OnInit} from '@angular/core';
import {Event} from './event.model';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Eventservice} from './eventservice';
import {AuthenticationService} from '../Authentication/authentication.service';
import {Ticket} from '../ticket/ticket.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentComponent} from '../comment/comment.component';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
})
export class EventdetailsComponent implements OnInit {
  @Input() event: Event;
  ticket: Ticket;
  userid: number;
  eventid: number;
  private sub: Subscription;
  admin = false;
  user = false;
  organizer = false;
  comment$: Observable<Comment>;
  cForm: FormGroup;

  constructor(private  route: ActivatedRoute, private eventService: Eventservice, private  auth: AuthenticationService,
              private  formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((value: any) => {
      this.eventid = value.eventid;
    });
    console.log('eventid is', this.eventid);
    this.cForm = this.formBuilder.group({
      Comment: ''
    } );
  }

  addTicket(eventid: number) {
    this.eventService.addTicket(this.auth.getUser(), eventid).subscribe(TicketData => {
      }, err => console.log(err),
      () => console.log('Booked'));

    console.log('this is event id', this.eventid);
    console.log('this is user id', this.auth.getUser());
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

  addComment() {
    this.eventService.addComment(this.cForm, this.auth.getUser(), this.eventid).subscribe(CommentData => {
      }, err => console.log(err),
      () => console.log('Comment Added'));
  }
}
