import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './Authentication/authentication.service';

@Component({
  selector: 'app-main',
  template: `
    <div class="container-fluid">
    <h1>Events Management Home </h1>
		<a routerLink="/home" class="btn btn-primary">Home</a>
    <a routerLink="/users" class="btn btn-primary">User List</a>
    <a routerLink="/register" class="btn btn-primary">Register</a>
    <a routerLink="/login" class="btn btn-primary">Login </a>
    <a routerLink="/events" class="btn btn-primary">Events</a>
     <a (click)="logout()" routerLink="/login" class="btn btn-primary">Logout</a>
    <hr>
		<router-outlet></router-outlet>
    <hr >
    <div class="text-sm-center"> © 2018 MEvent C.O</div>
    </div>
  `
})
export class MainComponent implements OnInit {
  constructor( private auth: AuthenticationService) {}
  ngOnInit() { }
  logout() {
    // remove user from local storage to log user out
    this.auth.logout();
    console.log('logged out');
  }
}
