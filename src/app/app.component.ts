import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './Authentication/authentication.service';
import {UserService} from './user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'EventDemoAngular';
  constructor(private auth: AuthenticationService, private users: UserService ) {}


  ngOnInit(): void {
    console.log(this.auth.getRole());
    console.log(this.auth.getUser());
  }
}
