import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Eventservice} from '../eventservice';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-eservices',
  templateUrl: './eservices.component.html',
  styleUrls: ['./eservices.component.css']
})
export class EservicesComponent implements OnInit {

  event$: Event;
  eformu: FormGroup;
  sub: Subscription;
  eventid: number;
  constructor(private formBuilder: FormBuilder, private eventService: Eventservice, private Route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.Route.params.subscribe((value: any) => {this.eventid = value.eventid; });
    console.log('event id :', this.eventid);
    this.eventService.getEvent(this.eventid).subscribe((value1 => {
      this.event$ = value1;
      this.eformu.patchValue(this.event$ as any);
    }));
    this.eformu = this.formBuilder.group({
      eventname: ['', Validators.compose([Validators.required])],
      eventdate: ['', Validators.compose([Validators.required])],
      eventcapacity: '',
      eventcity: '',
    });
  }
  onSubmit() {
    this.eventService.updateEvent(this.eventid, this.eformu).subscribe(res => {
      if (res !== null && res !== undefined) {
        console.log(res);
      }
    }, (error) => console.log(error), () => {});
  alert('Updated');
  }

}
