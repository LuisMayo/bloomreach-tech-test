import { Component, Input, OnInit } from '@angular/core';
import { FilterType, FilterTypeCategory } from 'src/app/classes/filterTypes';
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

  filterTypes: {type: FilterTypeCategory, items: FilterType[]}[];

  constructor() {
    const rawFilters = FilterType.getFilters();
    this.filterTypes = [];
    this.filterTypes.push({type: FilterTypeCategory.STRING, items: rawFilters.filter(item => item.category === FilterTypeCategory.STRING)});
    this.filterTypes.push({type: FilterTypeCategory.NUMBER, items: rawFilters.filter(item => item.category === FilterTypeCategory.NUMBER)});
  }

  ngOnInit(): void {
  }

}
