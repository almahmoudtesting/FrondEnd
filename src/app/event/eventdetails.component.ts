import {Component, Input, OnInit} from '@angular/core';
import {Event} from './event.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Eventservice} from './eventservice';

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

  constructor(private  route: ActivatedRoute , private eventService: Eventservice) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((value: any) => {this.eventid = value.eventid; });
    console.log('eventid is', this.eventid);
  }

}
