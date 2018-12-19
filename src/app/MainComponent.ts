import {Component, OnInit} from '@angular/core';

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
    <hr>
		<router-outlet></router-outlet>
    <hr >
    <div class="text-sm-center"> © 2018 MEvent C.O</div>
    </div>
  `
})
export class MainComponent implements OnInit {
  constructor() {}
  ngOnInit() { }
}
