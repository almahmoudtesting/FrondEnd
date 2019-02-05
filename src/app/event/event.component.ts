import { Component, OnInit } from '@angular/core';
import {Eventservice} from './eventservice';
import {AuthenticationService} from '../Authentication/authentication.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events$: Event[];
  currentEvent: Event;
  admin = false;
  user = false;
  organizer = false;

  constructor(private  eventService: Eventservice , private auth: AuthenticationService ) {
  }

  ngOnInit() {
    this.getEvents();
    this.getRole();
  }
  getEvents() {
    this.eventService.getEvents().subscribe( EventData => {
      this.events$ = EventData;
    },
      err => console.log(err),
      () => console.log('Getting Events ...')
      );
  }
  getEvent(event) {
    this.currentEvent = event;
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
  getApprovedEvents() {
    this.eventService.getApprovedEvents().subscribe( EventData => {
        this.events$ = EventData;
      },
      err => console.log(err),
      () => console.log('Getting Approved Events ...')
    );
  }
}
