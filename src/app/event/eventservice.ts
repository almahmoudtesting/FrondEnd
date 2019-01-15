import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../user/user.model';
import {Ticket} from '../ticket/ticket.model';

const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class Eventservice {
  constructor(private http: HttpClient) {
  }


  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`api/Events/AllEvents`);
  }

  addEvent( organizerid: number, a): Observable<Event> {
    return this.http.post<Event> (`api/Events/AddEvents/` + `${organizerid}`, JSON.stringify(a.value), API_ARGS);
  }

  updateEvent(eventid: number, a): Observable<Event> {
    return this.http.put<Event>(`api/Events/UpdateEvent/` + `${eventid}` , JSON.stringify(a.value), API_ARGS);
  }
  deleteEvent(eventid: number): Observable<Event> {
    return this.http.delete<Event>(`api/Events/DeleteEvent/` + `${eventid}`);
  }
  getEvent(id: number): Observable<Event> {
    return this.http.get<Event>(`api/Events/FindEvents/` + `${id}`);
  }
  addTicket(uid: number, eventid: number): Observable<Ticket> {
    return this.http.get<Ticket>(`api/Tickets/AddTickets/` + `${uid}` + `/` + `${eventid}`, API_ARGS);

  }
  addComment(a, uid: number , eid: number): Observable<Comment> {
    return this.http.post<Comment>(`api/Comments/AddComment/` + `${uid}` + `/` + `${eid}` , JSON.stringify(a.value), API_ARGS);
  }
}
