import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/responses/customer-events.response';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  filterOptions: Property[] = [];

  dropdown: any;

  constructor() { }

  ngOnInit(): void {
  }

}
