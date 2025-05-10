import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'education-entry',
  imports: [],
  templateUrl: './education-entry.component.html',
  styleUrl: './education-entry.component.css'
})
export class EducationEntryComponent {
  @Input() start: string = "couldn't read start";
  @Input() finish: string = "Present";
  @Input() place: string = "couldn't read place"
  @Input() details: string = "couldn't read details"
}
