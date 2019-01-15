import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));

        return this.http.get<any>( '/UserData', {headers: headers})
            .pipe(map(user => {
                // login successful if there's a user in the response
                if (user) {
                    // store user details and basic auth credentials in local storage
                    // to keep user logged in between page refreshes
                    user.authdata = window.btoa(username + ':' + password);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    user = JSON.parse(localStorage.getItem('currentUser'));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    getUser() {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      if (user) {
        return user.userID;
      }
    }
    getRole() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser) {
        return currentUser.Role;
      }
    }
}
// get role
