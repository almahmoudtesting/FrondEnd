import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from './ticket.model';
const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {
  }
  getTickets(): Observable< Ticket[]> {
  return this.http.get<Ticket[]>(`api/Tickets/AllTickets`);
  }
  getTicket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`api/Tickets/FindTickets/` + `${id}`);
  }
  getMyTickets(id: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`api/Tickets/AttenderTickets/` + `${id}`);
  }
}
