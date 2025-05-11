import { Component, Input } from '@angular/core';

@Component({
  selector: 'resume-entry',
  imports: [],
  templateUrl: './resume-entry.component.html',
  styleUrl: './resume-entry.component.css'
})
export class ResumeEntryComponent {
  @Input() start: string = "couldn't read start";
  @Input() finish: string = "Present";
  @Input() title: string = "couldn't read place"
  @Input() details: string = "couldn't read details"
}
