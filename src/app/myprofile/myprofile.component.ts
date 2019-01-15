import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../Authentication/authentication.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
  }

}
