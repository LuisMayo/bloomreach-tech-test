import { Component, OnInit } from '@angular/core';
import { CustomerEventsResponse } from './classes/responses/customer-events.response';
import { CustomerEventsService } from './services/customer-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bloomreach-tech-test';
  data?: CustomerEventsResponse
  constructor(private service: CustomerEventsService) {
  }
  ngOnInit() {
    this.service.getEvents().subscribe(data => this.data = data);
  }
}
