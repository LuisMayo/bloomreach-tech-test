export interface CustomerEventsResponse {
    data:    Data;
    success: boolean;
}

export interface Data {
    events: Event[];
}

export interface Event {
    type:       string;
    properties: Property[];
}

export interface Property {
    property: string;
    type:     Type;
}

export enum Type {
    Number = "number",
    String = "string",
}
