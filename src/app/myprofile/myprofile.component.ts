import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../Authentication/authentication.service';
import {UserService} from '../user/user.service';
import {User} from '../user/user.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  @Input() user: User;
  userid: number;
  private sub: Subscription;


  constructor(private auth: AuthenticationService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUser(this.auth.getUser()).subscribe(value => this.user = value);
    // console.log(this.auth.getUser());
  }
}
