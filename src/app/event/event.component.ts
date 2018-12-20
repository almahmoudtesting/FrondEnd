import { Component, OnInit } from '@angular/core';
import {Eventservice} from './eventservice';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events$: Event[];
  currentEvent: Event;

  constructor(private  eventService: Eventservice ) {
  }

  ngOnInit() {
    this.getEvents();
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
}
