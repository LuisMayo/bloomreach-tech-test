import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FilterType, FilterTypeCategory, FilterTypeId } from 'src/app/classes/filterTypes';
import { Property } from 'src/app/classes/responses/customer-events.response';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  filterOptions: Property[] = [];

  @ViewChild('textField')
  textField!: TemplateRef<any>;

  @ViewChild('numberField')
  numberField!: TemplateRef<any>;

  @ViewChild('twoNumberField')
  twoNumberField!: TemplateRef<any>;

  selectedField?: Property;

  filterTypes: {type: FilterTypeCategory, items: FilterType[]}[];

  selectedFilter!: FilterType;

  constructor() {
    const rawFilters = FilterType.getFilters();
    this.filterTypes = [];
    this.filterTypes.push({type: FilterTypeCategory.STRING, items: rawFilters.filter(item => item.category === FilterTypeCategory.STRING)});
    this.filterTypes.push({type: FilterTypeCategory.NUMBER, items: rawFilters.filter(item => item.category === FilterTypeCategory.NUMBER)});
  }

  ngOnInit(): void {
  }

  getActiveTemplate() {
    if (this.selectedFilter.category === FilterTypeCategory.STRING) {
      return this.textField;
    } else if (this.selectedFilter.id === FilterTypeId.BETWEEN) {
      return this.twoNumberField;
    } else {
      return this.numberField;
    }
  }

}
