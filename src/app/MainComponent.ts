import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './Authentication/authentication.service';

@Component({
  selector: 'app-main',
  template: `
    <div class="container-fluid">
      <nav class="navbar navbar-dark bg-dark">
        <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-dark" routerLink="/home">Home</button>
    <a routerLink="/users" class="btn btn-dark">User List</a>
    <a routerLink="/register" class="btn btn-dark">Register</a>
    <a routerLink="/login" class="btn btn-dark">Login </a>
    <a routerLink="/events" class="btn btn-dark">Events</a>
     <a (click)="logout()" routerLink="/login" class="btn btn-dark">Logout</a>
          <!--<form class="form-inline my-2 my-lg-0">-->
            <input class="form-control mr-sm-5" type="search" placeholder="Search" aria-label="Search">
            <a class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</a>
          <!--</form>-->
        </div>
      </nav>
       <div> <hr>
         <router-outlet></router-outlet>
         <hr ></div>
      <footer class="text-sm-center" id="footer"> © 2018 MEvent C.O</footer>
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
