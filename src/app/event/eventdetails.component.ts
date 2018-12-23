import {Component, Input, OnInit} from '@angular/core';
import {Event} from './event.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Eventservice} from './eventservice';
import {AuthenticationService} from '../Authentication/authentication.service';

@Component({
  selector: 'app-eventdetails',
  template: `<div *ngIf="event">
    <ul>



      <li>Name: {{event.eventname}}</li>
      <td> <button [routerLink]="['event',event.eventid]" class="btn btn-danger">Edit </button></td>
    </ul>

  </div>`
})
export class EventdetailsComponent implements OnInit {
  @Input() event: Event;
  eventid: number;
  private sub: Subscription;
  admin = false;
  user = false;
  organizer = false;

  constructor(private  route: ActivatedRoute , private eventService: Eventservice, private  auth: AuthenticationService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((value: any) => {this.eventid = value.eventid; });
    console.log('eventid is', this.eventid);

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
