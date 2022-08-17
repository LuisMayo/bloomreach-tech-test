export enum FilterTypeId {
    STRING_EQUALS,
    STRING_NOT_EQUALS,
    CONTAINS,
    NOT_CONTAINS,
    NUMBER_EQUALS,
    BETWEEN,
    LESS_THAN,
    GRATER_THAN
}

export enum FilterTypeCategory {
    STRING = 'String',
    NUMBER = 'Number'
}

export class FilterType {
    constructor(public id: FilterTypeId, public label: string, public category: FilterTypeCategory) {}

    private static filters?: FilterType[];
    static getFilters() {
        if (this.filters == null) {
            this.filters = [];
            this.filters.push(new FilterType(FilterTypeId.STRING_EQUALS, 'equals', FilterTypeCategory.STRING));
            this.filters.push(new FilterType(FilterTypeId.STRING_NOT_EQUALS, 'does not equal', FilterTypeCategory.STRING));
            this.filters.push(new FilterType(FilterTypeId.CONTAINS, 'contains', FilterTypeCategory.STRING));
            this.filters.push(new FilterType(FilterTypeId.NOT_CONTAINS, 'does not contains', FilterTypeCategory.STRING));
            this.filters.push(new FilterType(FilterTypeId.NUMBER_EQUALS, 'equal to', FilterTypeCategory.NUMBER));
            this.filters.push(new FilterType(FilterTypeId.BETWEEN, 'in between', FilterTypeCategory.NUMBER));
            this.filters.push(new FilterType(FilterTypeId.LESS_THAN, 'less than', FilterTypeCategory.NUMBER));
            this.filters.push(new FilterType(FilterTypeId.GRATER_THAN, 'greater than', FilterTypeCategory.NUMBER));
        }
        return this.filters;
    }
}
