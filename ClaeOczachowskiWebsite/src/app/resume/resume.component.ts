import { Component } from '@angular/core';
import { ResumeEntryComponent } from "../resume-entry/resume-entry.component";
import { JobEntryComponent } from '../job-entry/job-entry.component';
@Component({
  selector: 'app-resume',
  imports: [ResumeEntryComponent, JobEntryComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

}
