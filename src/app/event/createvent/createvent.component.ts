import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Eventservice} from '../eventservice';

@Component({
  selector: 'app-createvent',
  templateUrl: './createvent.component.html',
  styleUrls: ['./createvent.component.css']
})
export class CreateventComponent implements OnInit {
  event$: Observable<Event>;
  eForm: FormGroup;
  organizerid: number;
  constructor(private  formBuilder: FormBuilder, private eventService: Eventservice) {}

  ngOnInit() {
    this.eForm = this.formBuilder.group({
      eventname: ['', Validators.compose([Validators.required])],
      eventdate: ['', Validators.compose([Validators.required])],
      eventcapacity: '',
      eventcity: '',
      ecounter: ''
    });
  }
onSubmit() {
    this.eventService.addEvent(this.organizerid, this.eForm).subscribe(res => {
    if (res !== null && res !== undefined) {
      console.log(res);
    }
  }, (error) => console.log(error), () => {});
}
}
