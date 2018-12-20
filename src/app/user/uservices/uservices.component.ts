import { Component, OnInit } from '@angular/core';
import {Observable, Subscribable, Subscription} from 'rxjs';
import {User} from '../user.model';
 import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';


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



  constructor(private  formBuilder: FormBuilder, private userService: UserService, private Route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.Route.params.subscribe((value: any) => {this.userid = value.userid; });
    console.log('user id :', this.userid);
    this.userService.getUser(this.userid).subscribe((value0 => {
      this.users$ = value0;
      this.myReactiveFormu.patchValue(this.users$ as any);
    }));

    this.myReactiveFormu = this.formBuilder.group({

      useremail: ['', Validators.compose([Validators.required, Validators.email])],
      username: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]/)])],
      userpassword: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z]/)])],
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


