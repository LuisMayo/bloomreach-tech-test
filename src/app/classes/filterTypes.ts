export enum  FilterTypeId {
    STRING_EQUALS,
    STRING_NOT_EQUALS,
    CONTAINS,
    NOT_CONTAINS,
    NUMBER_EQUALS,
    BETWEEN,
    LESS_THAN,
    GRATER_THAN
}

export class FilterTypes {
    constructor(private id)
}
