import { Component, OnInit } from '@angular/core';
import {Observable, Subscribable, Subscription} from 'rxjs';
import {User} from '../user.model';
 import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../Authentication/authentication.service';
import {error} from '@angular/compiler/src/util';


@Component({
  selector: 'app-uservices',
  templateUrl: './uservices.component.html',
  styleUrls: ['./uservices.component.css']
})
export class UservicesComponent implements OnInit {
  users$: User;
  myReactiveFormu: FormGroup;
  sub: Subscription;
  userid: number;
  forbbid;
  error;



  constructor(private  formBuilder: FormBuilder, private userService: UserService,
              private Route: ActivatedRoute,
              private router: Router,
              private auth: AuthenticationService) {}

  ngOnInit() {
    this.sub = this.Route.params.subscribe((value: any) => {this.userid = value.userid;

    if (this.router.url.startsWith('/myprofile')) {
      if (this.userid != this.auth.getUser()) {
        this.forbbid = true;
        console.log('big no no');
      }
    }
    });
    if (!this.forbbid) {
      this.userService.getUser(this.userid).subscribe((value0 => {
        this.users$ = value0;
        this.myReactiveFormu.patchValue(this.users$ as any);
      } ), error1 => this.error = true);
    }
    this.myReactiveFormu = this.formBuilder.group({

      useremail: ['', Validators.compose([Validators.required, Validators.email])],
      username: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]/)])],
      userpassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      // confirm: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      // usergender: ``,
      // firstname: ``,
      // midname: ``,
      // lastname : ``,
      // userphone: ``,
      userdob: '',
      usercity: ''
      // }, {validator: passwordMatcher}); // pass in the validator function
    });

  }


  onSubmit() {
  this.userService.updateUser(this.myReactiveFormu, this.userid).subscribe(res => {
    if (res !== null && res !== undefined) {
      console.log(res);
    }
  }, (error) => console.log(error), () => {});

  }


  }


