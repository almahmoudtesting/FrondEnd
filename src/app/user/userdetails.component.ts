import {Component, Input, OnInit} from '@angular/core';
import {User} from './user.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './user.service';
import {AuthenticationService} from '../Authentication/authentication.service';

@Component({
  selector: 'app-userdetails',
  template: `
    <!--<div *ngIf="user">-->
    <!--<ul>-->
    <!--<li>Username: {{user.username}}</li>-->
    <!--<li>Email: {{user.useremail}}</li>-->
    <!--<li>City: {{user.usercity}}</li>-->
    <!--<li>Date of Birth {{user.userdob}}</li>-->
    <!--<li>Password: {{user.userpassword}}</li>-->
    <!--<td>-->
    <!--<button [routerLink]="['user',user.userid]" class="btn btn-danger">Edit</button>-->
    <!--</td>-->
    <!--</ul>-->

    <!--</div>-->
    <div *ngIf="user">
      <table class="table table-dark table-responsive">
        <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
          <th scope="col">Date of Birth</th>
          <th scope="col">Edit</th>
          <th scope="col">Deactivate</th>
          <th scope="col">Activate</th>
        </tr>
        </thead>
        <tbody>

        <td>{{user.username}}</td>

        <td>{{user.useremail}}</td>

        <td>{{user.usercity}}</td>

        <td>{{user.userdob}}</td>
        <td>
          <button [routerLink]="['user',user.userid]" class="btn btn-outline-success">Edit</button>
        </td>
        <td>
          <button (click)="deleteUser(user.userid)" class="btn btn-outline-danger">Delete</button>
        </td>
        <td>
          <button (click)="enableUser(user.userid)" class="btn btn-success">Activate</button>
        </td>
        </tbody>
      </table>
    </div>
  `


})
export class UserdetailsComponent implements OnInit {
  @Input() user: User;
  userid: number;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private userService: UserService, private auth: AuthenticationService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((value: any) => {
      this.userid = value.userid;
    });

    console.log('userid is', this.auth.getUser());
  }

  deleteUser(userid: number) {
    this.userService.deleteUser(this.auth.getUser()).subscribe(DeleteData => {}, err => console.log(err),
      () => console.log('Deleted'));
  }
  enableUser(userid: number) {
    this.userService.enableUser(this.auth.getUser()).subscribe(EnableData => {}, err => console.log(err),
      () => console.log('Enabled'));
  }
}
