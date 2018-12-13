import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user/user.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/user/user.model';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {
  users$: Observable<User>;
  myReactiveForm: FormGroup;
  constructor (private formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit() {

    this.myReactiveForm = this.formBuilder.group({
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
      usercity:''
    // }, {validator: passwordMatcher}); // pass in the validator function
  });
  }
  onSubmit() {
   // alert(JSON.stringify(this.myReactiveForm.value);
   this.userService.addUser(this.myReactiveForm).subscribe();
    // console.log('Form submitted: ', this.myReactiveForm.value);		// alert('Form submitted!', JSON.stringify(this.myReactiveForm.value));
    // TODO: do something useful with form
  }
  /*addCity(name: string): void {
		this.cityService.addCity(name)
			.subscribe(result => {
				this.cityAdded = result;
				this.cities = this.cityService.getCities();
			})
			*/
  }


