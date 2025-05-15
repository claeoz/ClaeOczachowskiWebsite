import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'skill-entry',
  imports: [CommonModule],
  templateUrl: './skill-entry.component.html',
  styleUrls: ['./skill-entry.component.css']
})
export class SkillEntryComponent {
  @Input() name: string = "";
  @Input() proficiency: number = 0;
}
