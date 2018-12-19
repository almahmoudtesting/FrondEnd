import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';


// const API_URL = 'http://localhost:8080/';
const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>( `api/Users/AllUsers`);
  }

  addUser(a): Observable<User> {
    return this.http.post<User>(
       `api/Users/AddUsers/ROLE_USER`, JSON.stringify(a.value), API_ARGS);
    }

    addOrganizer(a): Observable<User> {
      return this.http.post<User>(
         `api/Users/AddUsers/ROLE_ORGANIZER`, JSON.stringify(a.value), API_ARGS);
    }
    getUser(id: number): Observable<User> {

    return this.http.get<User>(`api/Users/FindUsers/` + `${id}`);
    }
    updateUser(a, userid: number): Observable<User> {
    return this.http.put<User>(`api/Users/UpdateUser/` + `${userid}` , JSON.stringify(a.value), API_ARGS);
    }
    deleteUser(userid: number): Observable<User> {
    return this.http.delete<User>(`api/Users/DeleteUser/` + `${userid}`);
    }


}
