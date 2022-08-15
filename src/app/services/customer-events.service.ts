import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerEventsResponse } from '../responses/customer-events.response';

@Injectable({
  providedIn: 'root'
})
export class CustomerEventsService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<CustomerEventsResponse> {
    return this.http.get<CustomerEventsResponse>(environment.customerURL);
  }
}
