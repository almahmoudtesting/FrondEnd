import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommentserviceService} from './commentservice.service';
import {AuthenticationService} from '../Authentication/authentication.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment$: Observable<Comment>;
  cForm: FormGroup;
  uid: number;
  eid: number;

  constructor(private  formBuilder: FormBuilder, private commentService: CommentserviceService, private auth: AuthenticationService) { }

  ngOnInit() {

}}
