import { Component, Input } from '@angular/core';

@Component({
  selector: 'job-entry',
  imports: [],
  templateUrl: './job-entry.component.html',
  styleUrl: './job-entry.component.css'
})
export class JobEntryComponent {
  @Input() start: string = ''
  @Input() end: string = ''
  @Input() title: string = ''
  @Input() place: string = ''
  @Input() city: string = ''
  @Input() state: string = ''
  @Input() details: string = ''
}
