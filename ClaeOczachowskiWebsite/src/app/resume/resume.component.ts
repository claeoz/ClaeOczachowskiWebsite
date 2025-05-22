import { Component } from '@angular/core';
import { ResumeEntryComponent } from "../resume-entry/resume-entry.component";
import { JobEntryComponent } from '../job-entry/job-entry.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-resume',
  imports: [ResumeEntryComponent, JobEntryComponent, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
 skills: string[] = [
  "C#",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "typeScript",
  "Bootstrap",
  "JQuery",
  "Angular",
  "GDScript",
  "Bash",
  "PowerShell",
  "Git",
  "Github",
  "Godot",
  "Blendr",
  "Agile"
 ]
}
