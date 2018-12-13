import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../user/user.model';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user/user.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

// function passwordMatcher(control: AbstractControl) {
//   return control.get('password').value === control.get('confirm').value
//     ? null : {'nomatch': true};
// }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
   

}}
