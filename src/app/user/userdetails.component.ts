import {Component, Input, OnInit} from '@angular/core';
import {User} from './user.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './user.service';
import {AuthenticationService} from '../Authentication/authentication.service';

@Component({
  selector: 'app-userdetails',
  template: `
  <div *ngIf="user">
    <ul>

    <li>Email: {{user.useremail}}</li>
    <td> <button [routerLink]="['user',user.userid]" class="btn btn-danger">Edit </button></td>
    </ul>

  </div>
`



})
export class UserdetailsComponent implements OnInit {
  @Input() user: User;
  userid: number;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private userService: UserService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((value: any) => {this.userid = value.userid; });

    console.log('userid is', this.auth.getUser());
  }

}
