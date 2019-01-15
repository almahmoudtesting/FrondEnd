import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class CommentserviceService {

  constructor(private  http: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`api/Comments/AllComments`);
  }
  getComment(id: number): Observable<Comment> {
    return this.http.get<Comment>(`api/Comments/FindComments/` + `${id}`);
  }
  deleteComment(cid: number): Observable<Comment> {
    return this.http.get<Comment>(`api/Comments/DeleteComment/` + `${cid}`);
  }
}
