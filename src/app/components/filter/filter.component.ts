import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/classes/responses/customer-events.response';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  filterOptions: Property[] = [];

  selectedField?: Property;

  constructor() { }

  ngOnInit(): void {
  }

}
