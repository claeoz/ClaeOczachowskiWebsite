import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { SkillEntryComponent } from '../skill-entry/skill-entry.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'proficiency-card',
  imports: [ SkillEntryComponent, CommonModule ],
  templateUrl: './proficiency-card.component.html',
  styleUrl: './proficiency-card.component.css'
})
export class ProficiencyCardComponent implements OnInit {
  //fields
  @Input() isLanguage: boolean = false;
  title: string = "";
  skills: Skill[] = []
  //methods
  ngOnInit(): void {
    if (this.isLanguage) {
      this.title = "Coding and Scripting Languages"
      this.skills.push(
        {name: "C", proficiency: 2},
        {name: "C#", proficiency: 5},
        {name: "Python", proficiency: 3},
        {name: "HTML", proficiency: 5},
        {name: "CSS", proficiency: 4},
        {name: "JavaScript", proficiency: 2},
        {name: "TypeScript", proficiency: 4},
        {name: "GDScript", proficiency: 1},
        {name: "Angular", proficiency: 4},
        {name: "BootStrap", proficiency: 3},
        {name: "JQuery", proficiency: 3},
        {name: "Bash", proficiency: 2},
        {name: "PowerShell", proficiency: 2},
        {name: "SQL", proficiency: 3},
        {name: "MongoDB", proficiency: 3}
      );
    }
    else{
      this.title = "Other"
      this.skills.push(
        {name: "Godot", proficiency: 4},
        {name: "Unity", proficiency: 2},
        {name: "GitHub", proficiency: 3},
        {name: "Blender", proficiency: 5},
        {name: "Ink Scape", proficiency: 2},
        {name: "Gimp", proficiency: 1},
        {name: "Fire Alpaca", proficiency: 2},
        {name: "Microsoft Visual Studio", proficiency: 5},
        {name: "Microsoft Visual Studio code", proficiency: 5},
        {name: "VS codium", proficiency: 5},
        {name: "Microsoft Office", proficiency: 4},
        {name: "Google Drive", proficiency: 5},
        {name: "Tableu", proficiency: 2},
        {name: "MongoDB Compass", proficiency: 4},
        {name: "Plesk", proficiency: 2}
      );
    }
  }
}
