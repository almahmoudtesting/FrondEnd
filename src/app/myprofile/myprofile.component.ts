import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../Authentication/authentication.service';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private auth: AuthenticationService, private user: UserService) {}

  ngOnInit(): void {
    console.log(this.auth.getUser());
  }

}
