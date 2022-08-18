import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/classes/responses/customer-events.response';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Input()
  stepOptions!: (Event | null)[];

  selectedStep?: Event;

  constructor() { }

  ngOnInit(): void {
    this.stepOptions.unshift(null);
  }

}
